import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-view',
  templateUrl: './welcome-view.component.html',
  styleUrls: ['./welcome-view.component.css']
})
export class WelcomeViewComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  clickHandler(): void {
    this.router.navigate(['permitions']);
  }

}
