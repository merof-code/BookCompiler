import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-rich-display',
  // templateUrl: './rich-display.component.html'
  template: `<div class="mce-content-body" [innerHTML]="sanitizedContent"></div>`,
  styleUrls: ['./rich-display.component.scss'] 
})
export class RichDisplayComponent implements OnInit{
  @Input() content!: string;
  sanitizedContent: SafeHtml = "";
  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.content);
  }
}
