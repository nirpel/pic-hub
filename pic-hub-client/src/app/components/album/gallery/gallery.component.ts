import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/services/album.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(public imageService: ImageService, public albumService: AlbumService) { }

  ngOnInit(): void {
    this.albumService.initViewDisplay();
    this.imageService.getAllImages();
  }
}
