import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-welcome-view',
  templateUrl: './welcome-view.component.html',
  styleUrls: ['./welcome-view.component.css']
})
export class WelcomeViewComponent implements OnInit {

  constructor(public userService: UserService, private router : Router) { }

  ngOnInit(): void {
  }

  clickHandler(): void {
    this.router.navigate(['library-details']);
  }

}
