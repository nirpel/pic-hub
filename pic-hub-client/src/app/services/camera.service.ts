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

  InitCamera(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.isCameraExist = mediaDevices && mediaDevices.length > 0;
      });
  }

  takeSnapshot(): void {
    this.trigger.next();
  }

  onOffWebCame() {
    if (this.webcamImage) {
      this.showWebcam = !this.showWebcam;
      this.webcamImage = null;
    }
  }

  handleInitError(error: WebcamInitError) {
    this.errors.push(error);
  }

  handleImage(webcamImage: WebcamImage) {
    this.getPicture.emit(webcamImage);
    this.webcamImage = webcamImage;
    this.showWebcam = false;
  }

  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
}
