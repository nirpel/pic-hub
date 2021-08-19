import { Component, OnInit } from '@angular/core';
import { Photo } from 'pexels';
import { ImageUploadService } from 'src/app/services/image-upload.service';
import { PexelsService } from 'src/app/services/pexels.service';

@Component({
  selector: 'app-api-image-upload',
  templateUrl: './api-image-upload.component.html',
  styleUrls: ['./api-image-upload.component.css']
})
export class ApiImageUploadComponent implements OnInit {

  selectedPhoto: Photo;
  constructor(public pexelsService: PexelsService, private uploadService: ImageUploadService) { }

  ngOnInit(): void {
    this.pexelsService.pullPhotos();
  }

  selectPhoto(photo: Photo) {
    if (this.selectedPhoto && this.selectedPhoto.id === photo.id) {
      this.selectedPhoto = null;
      this.uploadService.imageFile = null;
    } else {
      this.selectedPhoto = photo;
      this.uploadService.setImageFromUrl(photo.src.original);
    }
  }
}
