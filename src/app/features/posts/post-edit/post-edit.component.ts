import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, of, switchMap } from 'rxjs';
import { Post } from 'src/app/core/models/post.model';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html'
})
export class PostEditComponent implements OnInit, OnDestroy {
  post: Post | undefined;
  private subscription: Subscription | undefined;
  form: FormGroup = this.fb.group({  // Initialize it with empty form
    editorContent: ['']
  });;

  constructor(private postService: PostService, private route: ActivatedRoute, private fb: FormBuilder, private router:Router) {}
  ngOnInit(): void {
    this.subscription = this.route.data.pipe(
      switchMap(data => {
        if(data['post']) {
          return of<Post>(data['post']);
        } else {
          return this.loadPostFromService();
        }
    })).subscribe(post => {
      this.post = post;
      this.form.patchValue({ editorContent: post.content });
    });;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  get editorContentControl(): FormControl {
    return this.form.get('editorContent') as FormControl;
  }

  loadPostFromService(): Observable<Post> {
    return this.route.paramMap.pipe(
    switchMap( params => {
      const id = params.get('id');
      if (id === null) {  throw new Error('id was null');}
      return this.postService.get(+id);
    }));
  }
  
  save(): Observable<any> {
    const data = {post: {content: this.form.value.editorContent}};
    console.log(data);
    return this.postService.update(this.post?.id, data)
  }
  // The function that gets called when the form is submitted
  onSubmit() {
    console.log(this.form.value);
    this.save().subscribe(() => {
      this.router.navigate(['/post', this.post?.id], {state: {post: this.post}});
    });
  }
}
