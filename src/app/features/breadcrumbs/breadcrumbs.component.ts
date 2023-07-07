import { Component, Input, OnInit } from '@angular/core';
import { Section } from 'src/app/core/models/section.model';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html'
})
export class BreadcrumbsComponent implements OnInit {
  @Input() sections:Section[] = [];
  firstSection: Section = {} as Section;
  lastSection: Section = {} as Section;

  ngOnInit(): void {
    if(this.sections.length > 0) {
      this.firstSection = this.sections[0];
    }
    if(this.sections.length > 1) {
      this.lastSection = this.sections[this.sections.length - 1];
    }
  }
}
