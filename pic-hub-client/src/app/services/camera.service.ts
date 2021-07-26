import { EventEmitter, Injectable } from '@angular/core';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { ImageUploadService } from './image-upload.service';

@Injectable({
  providedIn: 'root'
})
export class CameraService {
  getPicture = new EventEmitter<WebcamImage>();
  showWebcam = true;
  isCameraExist = true;
  webcamImage: WebcamImage = null;
  errors: WebcamInitError[] = [];

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();

  constructor() { }

  // Get camera input from hardware & set isCameraExist by result
  InitCamera(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.isCameraExist = mediaDevices && mediaDevices.length > 0;
      });
  }

  // Raise trigger from taking a photo with camera
  takeSnapshot(): void {
    this.trigger.next();
  }

  // Switch off camera / Restart camera after a photo was taken
  onOffWebCame() {
    // If photo is taken
    if (this.webcamImage) {
      // Restart camera and delete taken photo
      this.showWebcam = !this.showWebcam;
      this.webcamImage = null;
    }
  }

  // Handle error in camera initialization
  handleInitError(error: WebcamInitError) {
    this.errors.push(error);
  }

  // Handler for camera operations when a photo is taken. parameter = taken photo
  handleImage(webcamImage: WebcamImage) {
    // emit picture taken event
    this.getPicture.emit(webcamImage);
    // set current taken photo to this one
    this.webcamImage = webcamImage;
    // hide camera for user
    this.showWebcam = false;
  }

  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
}
