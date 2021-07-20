import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/services/album.service';
import { Display } from 'src/app/models/display';

@Component({
  selector: 'app-album-view',
  templateUrl: './album-view.component.html',
  styleUrls: ['./album-view.component.css']
})
export class AlbumViewComponent implements OnInit {

  albumService: AlbumService;

  constructor(albumService: AlbumService) {
    this.albumService = albumService;
  }

  ngOnInit(): void {
  }

}
