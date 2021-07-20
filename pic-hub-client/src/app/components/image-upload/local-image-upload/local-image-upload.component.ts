import { Component, OnInit } from '@angular/core';
import { ImageUploadService } from 'src/app/services/image-upload.service';

@Component({
  selector: 'app-local-image-upload',
  templateUrl: './local-image-upload.component.html',
  styleUrls: ['./local-image-upload.component.css']
})
export class LocalImageUploadComponent implements OnInit {

  constructor(private uploadService: ImageUploadService) { }

  ngOnInit(): void {
  }

  onFileSelected(file: File): void {
    if (file.name && this.uploadService.isValidImageFile(file.name)) {
      this.uploadService.setImageFromFile(file);  
    }
    else {
      alert('Only image files are allowed!');
    }
  }
}
