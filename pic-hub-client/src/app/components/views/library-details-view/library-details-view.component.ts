import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumService } from 'src/app/services/album.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-library-details-view',
  templateUrl: './library-details-view.component.html',
  styleUrls: ['./library-details-view.component.css']
})
export class LibraryDetailsViewComponent implements OnInit {

  constructor(public userService: UserService, public albumService: AlbumService, private router: Router) { }

  ngOnInit(): void {
  }

  next(): void {
    console.log(this);
    
    this.router.navigate(['upload']);
  }

}
