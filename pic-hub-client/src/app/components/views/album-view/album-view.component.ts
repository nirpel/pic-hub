import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/services/album.service';
import { Display } from 'src/app/models/display';
import { ImageService } from 'src/app/services/image.service';
import { CategoryService } from 'src/app/services/category.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-album-view',
  templateUrl: './album-view.component.html',
  styleUrls: ['./album-view.component.css']
})
export class AlbumViewComponent implements OnInit {

  captionSearch: string;
  categorySearch: string;
  filteredCategories: Observable<string>;

  constructor(
    public albumService: AlbumService,
    public imageService: ImageService,
    public categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.albumService.setViewDisplay(Display.Grid);
    this.categoryService.getAllCategories();
  }
}
