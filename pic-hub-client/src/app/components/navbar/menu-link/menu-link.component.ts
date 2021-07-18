import { Component, Input, OnInit } from '@angular/core';
import { MenuLinkModel } from 'src/app/models/menu-link';

@Component({
  selector: 'app-menu-link',
  templateUrl: './menu-link.component.html',
  styleUrls: ['./menu-link.component.css']
})
export class MenuLinkComponent implements OnInit {

  @Input() model: MenuLinkModel;

  constructor() { }

  ngOnInit(): void {

  }

}
