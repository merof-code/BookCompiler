import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http: HttpClient) { }

  // query(
  //   config: ArticleListConfig
  // ): Observable<{ articles: Article[]; articlesCount: number }> {
  //   // Convert any filters over to Angular's URLSearchParams
  //   let params = new HttpParams();

  //   Object.keys(config.filters).forEach((key) => {
  //     // @ts-ignore
  //     params = params.set(key, config.filters[key]);
  //   });

  //   return this.http.get<{ articles: Article[]; articlesCount: number }>(
  //     "/articles" + (config.type === "feed" ? "/feed" : ""),
  //     { params }
  //   );
  // }
  
  create(project: Partial<Project>): Observable<Project> {
    return this.http
      .post<{ project: Project }>("/projects/", { project: project })
      .pipe(
        map((data) => data.project)
      );
  }

  get(): Observable<Project[]> {
    return this.http.get<Project[]>('/projects');
  }

  // get(slug: string): Observable<Article> {
  //   return this.http
  //     .get<{ article: Article }>(`/articles/${slug}`)
  //     .pipe(map((data) => data.article));
  // }

  update(project: Partial<Project>): Observable<Project> {
    return this.http
      .put<{ project: Project }>(`/projects/${project.id}`, {
        project: project,
      })
      .pipe(map((data) => data.project));
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`/projects/${id}`);
  }

}
