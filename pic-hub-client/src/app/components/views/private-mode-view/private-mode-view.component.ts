import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-private-mode-view',
  templateUrl: './private-mode-view.component.html',
  styleUrls: ['./private-mode-view.component.css']
})
export class PrivateModeViewComponent implements OnInit {

  password: string

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  enterPrivateMode(): void {
    let isAccessed: boolean = this.userService.enterPrivateMode(this.password);
    if (isAccessed) {
      this.router.navigate(['']);
    } else {
      this.alertInvalidPassword();
    }
  }

  exitPrivateMode(): void {
    this.userService.exitPrivateMode();
    this.router.navigate(['']);
  }

  private alertInvalidPassword(): void {
    this.password = '';
    alert('invalid password');
  }
}
