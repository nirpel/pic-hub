import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageDetailsComponent } from '../components/album/image-details/image-details.component';
import { Category } from '../models/category';
import { Image } from '../models/image';

const URL: string = 'http://localhost:3069/api'; // Url for GET request
const DIR: string = 'assets/images/uploads/';   // Dir for displaying images

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  images: Image[];

  constructor(private httpClient: HttpClient, private dialog: MatDialog) { }

  // Return full path of an image
  fullPath(image: Image) {
    return DIR + image.fileName;
  }

  private getImagesFromServer() {
    return this.httpClient.get<Image[]>(URL + '/images');
  }

  // Get all Image instances frim server
  getAllImages() {
    this.getImagesFromServer().subscribe(data => {
      this.images = data;
    });
  }

  // Get images by part of caption
  getImagesByCaption(caption: string) {
    // Avoid case sensitive issues
    if (caption) {
      caption = caption.toLocaleLowerCase();
      this.getImagesFromServer().subscribe(data => {
        this.images = data.filter(
          img => img.caption?.toLocaleLowerCase().includes(caption)
        );
      });
    }
    else {
      this.getAllImages();
    }
  }

  // Get images by specific category
  getImagesByCategory(category: Category) {
    if (category) {
      this.getImagesFromServer().subscribe(data => {
        this.images = data.filter(
          
          // TODO:
          // fix category searching by specifying to title / id

          img => img.categories?.includes(category)
        );
      });
    }
    else {
      this.getAllImages();
    }
  }

  // Post edited image to server
  editImage(image: Image) {
    return this.httpClient.post(URL + '/edit-image', image);
  }

  // Open dialog view of image details
  openImageDetails(image: Image): void {
    this.dialog.open(ImageDetailsComponent, {
      data: {
        image: image
      }
    });
  }

  // Save changes of edited image
  saveChanges(editedImage: Image): void {
    this.editImage(editedImage).subscribe(
      (data) => {
        console.log(data);
      }, (error) => {
        console.error(error);
      }, () => {
        // when request & respnse completed, close image details & refresh gallery
        this.dialog.closeAll();
        this.getAllImages();
      });
  }
}