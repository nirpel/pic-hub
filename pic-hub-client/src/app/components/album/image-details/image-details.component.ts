import { Component, Inject, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageService } from 'src/app/services/image.service';
import { faStar as fillStar, faUnlockAlt, faLock, faMapMarkerAlt, faEdit, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {

  defaultCaption: string = "(no caption)";
  image: Image;
  editedImage: Image;
  starIcon: IconDefinition;
  lockIcon: IconDefinition;
  locationIcon: IconDefinition = faMapMarkerAlt;
  editIcon: IconDefinition = faEdit;
  categoriesString: string;
  isImageEdited: boolean = false;
  isCaptionUnderEdition: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private router: Router,
    public imageService: ImageService
  ) { }

  ngOnInit(): void {
    // set image from injected data
    this.image = this.data.image;
    // clone image to edited image, every change will be displayed on it
    this.editedImage = JSON.parse(JSON.stringify(this.image));
    // set view by image properties
    this.setStarIcon();
    this.setLockIcon();
    this.setCategoriesString();
  }

  onCaptionChanged(): void {
    this.isImageEdited = true;
  }

  editCaption(): void {
    this.isCaptionUnderEdition = !this.isCaptionUnderEdition;
  }

  editIsFavorite(): void {
    this.editedImage.isFavorite = !this.editedImage.isFavorite;
    this.setStarIcon();
    this.isImageEdited = true;
  }

  editIsPrivate(): void {
    this.editedImage.isPrivate = !this.editedImage.isPrivate;
    this.setLockIcon();
    this.isImageEdited = true;
  }

  private setCategoriesString(): void {
    // init string
    this.categoriesString = "";

    // check if there are any categories
    if (this.editedImage.categories.length > 0) {
      // iterate all categories from image's categories collection
      for (let i = 0; i < this.editedImage.categories.length; i++) {
        // add current category's title to string
        this.categoriesString += this.editedImage.categories[i].title;
        // if there's more categories to come, add a seperator
        if (i != this.editedImage.categories.length - 1) {
          this.categoriesString += " | ";
        }
      }
    } else {
      this.categoriesString = "(no categories)";
    }
  }

  private setStarIcon(): void {
    this.starIcon = this.editedImage.isFavorite ? fillStar : emptyStar;
  }

  private setLockIcon(): void {
    this.lockIcon = this.editedImage.isPrivate ? faLock : faUnlockAlt;
  }
}
