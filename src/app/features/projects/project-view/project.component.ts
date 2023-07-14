import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/core/models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
})
export class ProjectViewComponent {
  @Input() project!:Project;
}
