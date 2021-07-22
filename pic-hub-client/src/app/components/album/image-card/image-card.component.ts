import { Component, OnInit, Input } from '@angular/core';
import { Image } from 'src/app/models/image';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit {

  @Input() image: Image;
  imageService: ImageService;

  constructor(service: ImageService) {
    this.imageService = service;
  }

  ngOnInit(): void {
  }

}
