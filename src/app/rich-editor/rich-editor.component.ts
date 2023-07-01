import { Component } from '@angular/core';

@Component({
  selector: 'app-rich-editor',
  templateUrl: './rich-editor.component.html',
  styleUrls: ['./rich-editor.component.scss']
})
export class RichEditorComponent {
  title = 'BookCompiler';
  editorConfig = {
    base_url: '/tinymce',
    suffix: '.min',
    plugins: 'lists link image table wordcount paste',
    toolbar: 'undo redo | styles | bold italic | link image'
  };
  // toolbar: [
  //   { name: 'history', items: [ 'undo', 'redo' ] },
  //   { name: 'styles', items: [ 'styles' ] },
  //   { name: 'formatting', items: [ 'bold', 'italic' ] },
  //   { name: 'alignment', items: [ 'alignleft', 'aligncenter', 'alignright', 'alignjustify' ] },
  //   { name: 'indentation', items: [ 'outdent', 'indent' ] }
  // ]  
}
