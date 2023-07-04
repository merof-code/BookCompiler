import { Component, Input } from '@angular/core';
import { Project } from 'src/app/core/models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() project:Project | undefined;
  name: string = (Math.random() * 1000).toFixed(0).toString();
}
