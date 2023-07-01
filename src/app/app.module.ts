import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorModule, TINYMCE_SCRIPT_SRC  } from '@tinymce/tinymce-angular';
import { ProjectComponent } from './project/project.component';
import { BookBrowserComponent } from './book-browser/book-browser.component';
import { RichEditorComponent } from './rich-editor/rich-editor.component';
import { ProjectsComponent } from './projects/projects.component'

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
    EditorModule
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
