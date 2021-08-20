import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-permitions',
  templateUrl: './permitions.component.html',
  styleUrls: ['./permitions.component.css']
})
export class PermitionsComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}
