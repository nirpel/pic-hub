import { Injectable } from '@angular/core';
import { Display } from '../models/display';
import { CookieService } from './cookie.service';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  // current view to display
  viewDisplay: Display = Display.List;
  readonly grid: Display = Display.Grid;
  readonly list: Display = Display.List;

  constructor(private cookieService: CookieService) {
    this.initViewDisplay();
  }

  // Set current view to display (Grid/List)
  setViewDisplay(display: Display) {
    this.viewDisplay = display;
  }

  initViewDisplay() {
    let viewDisplay = this.cookieService.getCookie('view-display');
    if (viewDisplay) {
      this.viewDisplay = parseInt(viewDisplay);
    }
  }
}
