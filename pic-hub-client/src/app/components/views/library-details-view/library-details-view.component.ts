import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-library-details-view',
  templateUrl: './library-details-view.component.html',
  styleUrls: ['./library-details-view.component.css']
})
export class LibraryDetailsViewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  next(): void {
    this.router.navigate(['upload']);
  }

}
