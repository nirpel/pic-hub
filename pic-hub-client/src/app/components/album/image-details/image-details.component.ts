import { Component, Inject, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageService } from 'src/app/services/image.service';
import { faStar as fillStar, faUnlockAlt, faLock, faMapMarkerAlt, faEdit, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';
import { MapService } from 'src/app/services/map.service';
import { Location } from 'src/app/models/location';

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
  isCategoriesUnderEdition: boolean = false;
  isLocationUnderEdition: boolean = false;
  categoriesToAddOptional: Category[];
  selectedCategoryToAdd: Category;


  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    public categoryService: CategoryService,
    public imageService: ImageService,
    public mapService: MapService
  ) { }

  ngOnInit(): void {
    // set image from injected data
    this.image = this.data.image;
    // clone image to edited image, every change will be displayed on it
    this.editedImage = JSON.parse(JSON.stringify(this.image));
    // refrash categories list
    this.categoryService.getAllCategories();
    // init map for location of current image & listen to location changes
    this.mapService.initMap(this.editedImage.location);
    this.mapService.locationChanged.subscribe((location: Location) => {
      this.setLocation(location);
    })
    // set view by image properties
    this.setStarIcon();
    this.setLockIcon();
    this.setCategoriesString();
  }

  editLocation(): void {
    this.isLocationUnderEdition = !this.isLocationUnderEdition;
  }

  editCategories(): void {
    if (!this.isCategoriesUnderEdition) {
      this.initCategoriesToAddList();
    }
    this.isCategoriesUnderEdition = !this.isCategoriesUnderEdition;
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

  onCaptionChanged(): void {
    this.isImageEdited = true;
  }

  setLocation(location: Location) {
    this.editedImage.location = location;
    this.isImageEdited = true;
  }

  addCategory(): void {
    if (this.selectedCategoryToAdd) {
      this.editedImage.categories.push(this.selectedCategoryToAdd);
      this.selectedCategoryToAdd = null;
      this.setCategoriesString();
      this.editCategories();
    }
  }

  onChangeCategory(category: Category): void {
    this.selectedCategoryToAdd = category;
    this.isImageEdited = true;
  }

  // init a list of categories that are NOT currently related to current image
  private initCategoriesToAddList() {
    // init categories options array
    this.categoriesToAddOptional = [];
    for (let i = 0; i < this.categoryService.categories.length; i++) {
      // indicate that current category is not related
      let exist = false;
      for (let j = 0; j < this.editedImage.categories.length; j++) {
        // if a category is related to current image
        if (this.editedImage.categories[j].title === this.categoryService.categories[i].title) {
          exist = true;
          break;
        }
      }
      // if category is not related, add it to options list
      if (!exist) {
        this.categoriesToAddOptional.push(this.categoryService.categories[i]);
      }
    }
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
