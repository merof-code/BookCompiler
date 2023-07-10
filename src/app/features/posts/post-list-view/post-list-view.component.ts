import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/core/models/post.model';

@Component({
  selector: 'app-post-list-view',
  templateUrl: './post-list-view.component.html'
})
export class PostListViewComponent {
  @Input() post!: Post;
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
        this.router.navigate(['/post', this.post.id])
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
