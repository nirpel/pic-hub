import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-album-grid',
  templateUrl: './album-grid.component.html',
  styleUrls: ['./album-grid.component.css']
})
export class AlbumGridComponent implements OnInit {

  imageService: ImageService;

  constructor(imageService: ImageService) {
    this.imageService = imageService;
  }

  ngOnInit(): void {
    this.imageService.getAllImages();
  }

}
