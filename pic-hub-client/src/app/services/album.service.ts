import { Injectable } from '@angular/core';
import { Display } from '../models/display';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  viewDisplay: Display = Display.Grid;
  readonly grid: Display = Display.Grid;
  readonly list: Display = Display.List;
  
  constructor() { }
  
  setViewDisplay(display: Display) {
    this.viewDisplay = display;
  }
}
