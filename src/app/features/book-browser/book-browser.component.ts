import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SectionDisplay } from 'src/app/core/models/section_display.model';
import { SectionsService } from 'src/app/core/services/sections.service';

@Component({
  selector: 'app-book-browser',
  templateUrl: './book-browser.component.html',
  styleUrls: ['./book-browser.component.scss']
})
export class BookBrowserComponent implements OnInit{
  info!: SectionDisplay;
  constructor(private route: ActivatedRoute, private sectionService: SectionsService) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id === null) {
        throw new Error('id was null');
      }
      this.sectionService.getSectionBrowseInfo(+id).subscribe(x=> this.info = x);
    })
  }

  addSection() {
    // FIXME: implement this
  }

  addPost() {
    // FIXME: implement this
  }

}
