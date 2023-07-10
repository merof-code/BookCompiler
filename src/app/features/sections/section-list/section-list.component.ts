import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Section } from 'src/app/core/models/section.model';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html'
})
export class SectionListComponent {
  @Input() section!: Section;
  @Output() editName: EventEmitter<string> = new EventEmitter<string>()

  constructor(private router: Router){}

  preventSingleClick = false;
  timer: any;
  delay!: Number;


  singleClick(event:any) {
    this.preventSingleClick = false;
    const delay = 280;
    this.timer = setTimeout(() => {
      if (!this.preventSingleClick) {
        console.log("singleClick")
        this.router.navigate(['/br', this.section.id])
      }
    }, delay);
  }

  doubleClick(event:any) {
    this.preventSingleClick = true;
    clearTimeout(this.timer);
    // FIXME: make this button make it edit
    console.log("doubleClick")  
  }
}
