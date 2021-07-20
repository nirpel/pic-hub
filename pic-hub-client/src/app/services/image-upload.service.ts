import { Injectable } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  private base64ImageToUpload: string = null;
  private readonly extensions: string[] = [
    'png', 'jpg', 'jpeg', 'gif'
  ];

  constructor() { }

  upload(): void {
    //TODO: POST image to server
  }

  isValidImageFile(fileName: string): boolean {
    return this.extensions.includes(fileName.split('.').pop().toLowerCase());
  }

  setImageFromWebcamImage(webcamImage: WebcamImage): void {
    if (webcamImage) {
      this.setImage(webcamImage.imageAsBase64);
    }
  }

  setImageFromFile(file: File): void {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.setImage(reader.result.toString());
    };
    reader.onerror = (error) => {
      console.error('Error: ', error);
    };
  }

  private setImage(base64: string) {
    this.base64ImageToUpload = base64;
  }
}
