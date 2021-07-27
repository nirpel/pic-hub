import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  imageService: ImageService;

  constructor(imageService: ImageService) { 
    this.imageService = imageService;
  }

  ngOnInit(): void {
    this.imageService.getAllImages();
  }

}
