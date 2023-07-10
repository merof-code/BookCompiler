import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  update(id: number | undefined, value: any): Observable<any> {
    return this.http.patch('/posts/' + id, value); 
  }

  constructor(private http: HttpClient) { }

  get(id: number): Observable<Post> {
    return this.http.get<Post>('/posts/' + id);
  }
}
