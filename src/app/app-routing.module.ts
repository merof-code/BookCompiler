import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './features/projects/projects-list/projects.component';
import { BookBrowserComponent } from './features/book-browser/book-browser.component';
import { PostViewComponent } from './features/posts/post-view/post-view.component';
import { PostEditComponent } from './features/posts/post-edit/post-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: 'home', component: ProjectsComponent},
  { path: 'projects', component: ProjectsComponent },
  { path: 'browse/:id', component: BookBrowserComponent},
  { path: 'br/:id', component: BookBrowserComponent},
  { path: 'post/:id', component: PostViewComponent},
  { path: 'post/:id/edit', component: PostEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
