import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-permitions-view',
  templateUrl: './permitions-view.component.html',
  styleUrls: ['./permitions-view.component.css']
})
export class PermitionsViewComponent implements OnInit {

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  save(): void {
    this.router.navigate(['']);
  }
}
