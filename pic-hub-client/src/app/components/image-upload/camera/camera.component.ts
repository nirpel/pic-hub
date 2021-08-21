import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { CameraService } from 'src/app/services/camera.service';
import { ImageUploadService } from 'src/app/services/image-upload.service';
import { faCamera, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  cameraService: CameraService;
  cameraIcon: IconDefinition = faCamera;

  constructor(cameraService: CameraService, private uploadService: ImageUploadService) { 
    this.cameraService = cameraService;
  }

  ngOnInit(): void {
    this.cameraService.InitCamera();
  }

  takeNewPicture(): void {
    this.cameraService.onOffWebCame();
    this.uploadService.imageFile = null;
  }

  handleImage(webcamImage: WebcamImage) {
    this.cameraService.handleImage(webcamImage);
    this.updateImage();
  }

  updateImage() : void{
    this.uploadService.setImageFromWebcamImage(this.cameraService.webcamImage);
  }
}
