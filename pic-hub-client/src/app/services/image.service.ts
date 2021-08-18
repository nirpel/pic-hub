import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageDetailsComponent } from '../components/album/image-details/image-details.component';
import { Image } from '../models/image';
import { UserService } from './user.service';

const URL: string = 'http://localhost:3069/api'; // Url for GET request
const DIR: string = 'assets/images/uploads/';   // Dir for displaying images

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  images: Image[];

  constructor(private httpClient: HttpClient, private dialog: MatDialog, private userService: UserService) { }

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
      this.filterPrivateMode();
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
        this.filterPrivateMode();
      });
    }
    else {
      this.getAllImages();
    }
  }

  // Get images by specific category
  getImagesByCategory(categoryTitle: string) {
    if (categoryTitle) {
      let title = categoryTitle.toLowerCase();
      this.getImagesFromServer().subscribe(data => {
        this.images = data.filter(
          (img) => {
            if (img.categories) {
              for (let i = 0; i < img.categories.length; i++) {
                if (img.categories[i].title.toLowerCase() === title)
                  return true;
              }
              return false;
            }
          }
        );
        this.filterPrivateMode();
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

  private filterPrivateMode() {
    if (!this.userService.isPrivateModeOn) {
      this.images = this.images.filter(img => img.isPrivate === false);
    }
  }
}