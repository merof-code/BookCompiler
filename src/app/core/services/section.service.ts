import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SectionDisplay } from '../models/section_display.model';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(private http: HttpClient) { }

  getSectionBrowseInfo(id:number): Observable<SectionDisplay> {
    return this.http.get<SectionDisplay>('/sections/' + id)
  }
}
