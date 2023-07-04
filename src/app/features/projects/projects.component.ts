import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/core/models/project.model';
import { ProjectsService } from 'src/app/core/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: [],
})
export class ProjectsComponent {
  projectList$:Observable<Project[]>;
  constructor(private projectService:ProjectsService) {
    this.projectList$ = projectService.getProjects();
  }

}
