import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Observable } from 'rxjs';

const URL: string = 'http://localhost:3069/api/upload';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  // imageFile: the current image in File type to post to server
  private imageFile: File;
  private readonly extensions: string[] = [
    'png', 'jpg', 'jpeg', 'gif'
  ];

  constructor(private httpClient: HttpClient) { }

  // Upload single image to server
  upload(): Observable<any> {
    // Upload image only if imageFile has value 
    if (this.imageFile) {
      // Build imageFile in form-data and post to server
      let formData = new FormData();
      formData.append('image', this.imageFile);
      return this.httpClient.post<any>(URL, formData);
    }
  }

  // Indicates if a given file is a valid image file
  isValidImageFile(fileName: string): boolean {
    return this.extensions.includes(fileName.split('.').pop().toLowerCase());
  }

  // Transform a WebcamImage type to File & set it to current selected image
  async setImageFromWebcamImage(webcamImage: WebcamImage): Promise<void> {
    // Ensure param has value
    if (webcamImage) {
      // Transform WebcamImage to File async
      let imageFile: File = await this.dataUrlToFile(webcamImage.imageAsDataUrl);

      // Set selected image to given parameter
      this.setImage(imageFile);
    }
  }

  // Converter from dataUrl string to File instance 
  private dataUrlToFile(url: string): Promise<File>{
    return (
      fetch(url)
        .then((response) => {
          // return fetched datab url's buffer array
          return response.arrayBuffer();
        })
        .then((buffer) => {
          // build image file from returned buffer array
          return new File([buffer], 'newImage.jpg', { type: 'image/jpeg' });
        })
    );
  }

  // Sets the current selected image to upload from a given File
  setImageFromFile(file: File): void {
    this.setImage(file);
  }

  private setImage(imageFile: File) {
    this.imageFile = imageFile;
  }
}
