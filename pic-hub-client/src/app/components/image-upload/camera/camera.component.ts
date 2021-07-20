import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { CameraService } from 'src/app/services/camera.service';
import { ImageUploadService } from 'src/app/services/image-upload.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  cameraService: CameraService;

  constructor(cameraService: CameraService, private uploadService: ImageUploadService) { 
    this.cameraService = cameraService;
  }

  ngOnInit(): void {
    this.cameraService.InitCamera();
  }

  takeNewPicture(): void {
    this.cameraService.onOffWebCame();
    this.updateImage();
  }

  handleImage(webcamImage: WebcamImage) {
    this.cameraService.handleImage(webcamImage);
    this.updateImage();
  }

  updateImage() : void{
    this.uploadService.setImageFromWebcamImage(this.cameraService.webcamImage);
  }
}
