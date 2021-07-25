import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Observable } from 'rxjs';

const URL: string = 'http://localhost:3069/api/upload';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  private imageFile: File;
  private readonly extensions: string[] = [
    'png', 'jpg', 'jpeg', 'gif'
  ];

  constructor(private httpClient: HttpClient) { }

  upload(): Observable<any> {
    if (this.imageFile) {
      let formData = new FormData();
      formData.append('image', this.imageFile);
      return this.httpClient.post<any>(URL, formData);
    }
  }

  isValidImageFile(fileName: string): boolean {
    return this.extensions.includes(fileName.split('.').pop().toLowerCase());
  }

  async setImageFromWebcamImage(webcamImage: WebcamImage): Promise<void> {
    if (webcamImage) {
      let imageFile: File = await this.dataUrlToFile(webcamImage.imageAsDataUrl);
      this.setImage(imageFile);
    }
  }

  private dataUrlToFile(url: string) {
    return (
      fetch(url)
        .then((response) => {
          return response.arrayBuffer();
        })
        .then((buffer) => {
          return new File([buffer], 'newImage.jpg', { type: 'image/jpeg' });
        })
    );
  }

  setImageFromFile(file: File): void {
    this.setImage(file);
  }

  private setImage(imageFile: File) {
    this.imageFile = imageFile;
  }
}
