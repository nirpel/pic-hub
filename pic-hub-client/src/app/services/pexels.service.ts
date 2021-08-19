import { Injectable } from '@angular/core';
import { createClient, ErrorResponse, Photo, Photos } from 'pexels';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PexelsService {
  private client = createClient(environment.PEXELS_API_KEY);
  photos: Photo[] = [];

  constructor() { }

  async pullPhotos() {
    let paginationObj: Photos | ErrorResponse = await this.client.photos.curated({ per_page: 80 }) as Photos;
    if (paginationObj) {
      this.photos = paginationObj.photos;
      console.log(this.photos);
    } else {
      console.error('Something went wrong with pulling photos from API.');
    }
  }
}
