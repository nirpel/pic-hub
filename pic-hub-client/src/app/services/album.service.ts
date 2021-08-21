import { Injectable } from '@angular/core';
import { Display } from '../models/display';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  // current view to display
  viewDisplay: Display = Display.List;
  readonly grid: Display = Display.Grid;
  readonly list: Display = Display.List;
  
  constructor() { }
  
  // Set current view to display (Grid/List)
  setViewDisplay(display: Display) {
    this.viewDisplay = display;
  }
}
