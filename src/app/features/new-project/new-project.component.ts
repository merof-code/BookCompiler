import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, UntypedFormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { Errors } from 'src/app/core/models/errors.model';
import { Project } from 'src/app/core/models/project.model';
import { ProjectService } from 'src/app/core/services/project.service';


interface ProjectForm {
  name: FormControl<string>;
  description: FormControl<string>;
}

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  // styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnDestroy {
  @Input() open:boolean = false;
  @Output() newProject: EventEmitter<Project> = new EventEmitter<Project>();

  projectForm: UntypedFormGroup = new FormGroup<ProjectForm>({
    name: new FormControl("", { nonNullable: true }),
    description: new FormControl("", { nonNullable: true }),
  });
  
  errors: Errors | null = null;
  isSubmitting = false;
  destroy$ = new Subject<void>();

  constructor(
    private readonly projectService: ProjectService,
  ) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  submitForm(): void {
    this.isSubmitting = true;
    // post the changes
    this.projectService
      .create({
        ...this.projectForm.value
      })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (post:Project) => {this.newProject.emit(post); this.clean()},
        error: (err:any) => {
          this.errors = err;
          this.isSubmitting = false;
        },
      });
  }
  clean() {
    this.open = false;
    this.projectForm = new FormGroup<ProjectForm>({
      name: new FormControl("", { nonNullable: true }),
      description: new FormControl("", { nonNullable: true }),
    });
  } 
}
