import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Image } from 'src/app/models/image';
import { ImageService } from 'src/app/services/image.service';
import { ImageDetailsComponent } from '../image-details/image-details.component';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit {

  @Input() image: Image;

  constructor(public imageService: ImageService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openImageDetails(): void {
    this.dialog.open(ImageDetailsComponent, {
      data: {
        image: this.image
      }
    });
  }
}
