import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumService } from 'src/app/services/album.service';
import { CookieService } from 'src/app/services/cookie.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-library-details-view',
  templateUrl: './library-details-view.component.html',
  styleUrls: ['./library-details-view.component.css']
})
export class LibraryDetailsViewComponent implements OnInit {

  constructor(
    public userService: UserService,
    public albumService: AlbumService,
    public cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  next(): void {
    this.cookieService.setCookie('library-name', this.userService.libraryName);
    this.cookieService.setCookie('private-mode-password', this.userService.privateModePassword);
    this.cookieService.setCookie('view-display', this.albumService.viewDisplay.toString());
    this.router.navigate(['upload']);
  }
}
