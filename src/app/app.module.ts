import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EditorModule, TINYMCE_SCRIPT_SRC  } from '@tinymce/tinymce-angular';
import { ProjectComponent } from './features/project/project.component';
import { BookBrowserComponent } from './features/book-browser/book-browser.component';
import { RichEditorComponent } from './features/editor/rich-editor/rich-editor.component';
import { ProjectsComponent } from './features/projects/projects.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { ApiInterceptor } from './core/interceptors/api.interceptor';
import { EMPTY } from 'rxjs';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { JwtService } from './core/services/jwt.service';
import { UserService } from './core/services/user.service';
import { BreadcrumbsComponent } from './features/breadcrumbs/breadcrumbs.component';
import { SectionListComponent } from './features/sections/section-list/section-list.component';
import { PostListViewComponent } from './features/posts/post-list-view/post-list-view.component';
import { PostViewComponent } from './features/posts/post-view/post-view.component';
import { PostEditComponent } from './features/posts/post-edit/post-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RichDisplayComponent } from './features/editor/rich-display/rich-display.component';

// export function initAuth(jwtService: JwtService, userService: UserService) {
//   return () => (jwtService.getToken() ? userService.getCurrentUser() : EMPTY);
// }
@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    BookBrowserComponent,
    RichEditorComponent,
    ProjectsComponent,
    BreadcrumbsComponent,
    SectionListComponent,
    PostListViewComponent,
    PostViewComponent,
    PostEditComponent,
    RichDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EditorModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initAuth,
    //   deps: [JwtService, UserService],
    //   multi: true,
    // },
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
