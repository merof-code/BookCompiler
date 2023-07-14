import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/core/models/project.model';
import { ProjectService } from 'src/app/core/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: [],
})
export class ProjectsComponent {
  isModalOpen: boolean = true;
  projectList$:Observable<Project[]>;
  constructor(private projectService:ProjectService) {
    this.projectList$ = projectService.get();
  }

  newProject: boolean = false;
  createProject() {
    this.newProject = true;
  }
}
