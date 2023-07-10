import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html'
})
export class PostViewComponent implements OnInit {
  constructor(private route: ActivatedRoute/*, private postService: PostService*/) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(x=> {
      // x.get('id')
      // FIXME: make load from PostService
    });
    throw new Error('Method not implemented.');
  }
}
