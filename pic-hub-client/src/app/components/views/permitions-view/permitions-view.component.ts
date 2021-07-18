import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-permitions-view',
  templateUrl: './permitions-view.component.html',
  styleUrls: ['./permitions-view.component.css']
})
export class PermitionsViewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  next(): void {
    this.router.navigate(['library-details']);
  }
}
