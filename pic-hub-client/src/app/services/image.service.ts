import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private readonly dir = 'assets/images/uploads/';

  images: Image[] = [
    new Image('850a168f9e2bdad9863fef4829300466.jpeg', 'Duck', [{ id: 1, title: 'Fun' }], 'Here', false, false)
  ];

  constructor() { }

  fullPath(image: Image) {
    return this.dir + image.fileName;
  }
}