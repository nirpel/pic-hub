import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Image } from '../models/image';

const URL: string = 'http://localhost:3069/api/images'; // Url for GET request
const DIR: string = 'assets/images/uploads/';   // Dir for displaying images

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  images: Image[];

  constructor(private httpClient: HttpClient) { }

  // Return full path of an image
  fullPath(image: Image) {
    return DIR + image.fileName;
  }

  // Get all Image instances frim server
  getAllImages() {
    return this.httpClient.get<Image[]>(URL).subscribe(data => {
      this.images = data;
    });
  }
}