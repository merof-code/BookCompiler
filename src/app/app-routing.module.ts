import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './features/projects/projects.component';
import { BookBrowserComponent } from './features/book-browser/book-browser.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: 'home', component: ProjectsComponent },
  // { path: 'browse/:id', component: BookBrowserComponent},
  { path: 'br/:id', component: BookBrowserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
