import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorModule, TINYMCE_SCRIPT_SRC  } from '@tinymce/tinymce-angular';
import { ProjectComponent } from './features/project/project.component';
import { BookBrowserComponent } from './features/book-browser/book-browser.component';
import { RichEditorComponent } from './features/rich-editor/rich-editor.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    BookBrowserComponent,
    RichEditorComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EditorModule,
    HttpClientModule,
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
