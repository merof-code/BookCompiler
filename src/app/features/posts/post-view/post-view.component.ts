import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { Post } from 'src/app/core/models/post.model';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  // styleUrls: ['./post-view.component.scss'],
})
export class PostViewComponent implements OnInit {
  post$: Observable<Post> | undefined;

  constructor(private route: ActivatedRoute, private postService: PostService) {}
  ngOnInit(): void {
    this.post$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        if (id === null) {
          throw new Error('id was null');
        }
        return this.postService.get(+id);
      })
    );
  }
}
