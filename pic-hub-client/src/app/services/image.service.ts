import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Image } from '../models/image';

const URL: string = 'http://localhost:3069/api/images';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private readonly dir = 'assets/images/uploads/';

  images: Image[];

  constructor(private httpClient: HttpClient) { }

  fullPath(image: Image) {
    return this.dir + image.fileName;
  }

  getAllImages() {
    return this.httpClient.get<Image[]>(URL).subscribe(data => {
      this.images = data;
    });
  }
}