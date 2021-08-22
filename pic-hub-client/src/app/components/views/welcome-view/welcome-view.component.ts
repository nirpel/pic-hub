import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'src/app/services/cookie.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-welcome-view',
  templateUrl: './welcome-view.component.html',
  styleUrls: ['./welcome-view.component.css']
})
export class WelcomeViewComponent implements OnInit {

  constructor(public userService: UserService, public cookieService: CookieService ,private router : Router) { }

  ngOnInit(): void {
    if (this.userService.allowCamera && this.userService.allowLocation && this.userService.allowPrivateMode) {
      this.router.navigate(['gallery']);
    }
  }

  clickHandler(): void {
    this.cookieService.setCookie('permitions', 'accepted');
    this.router.navigate(['library-details']);
  }

}
