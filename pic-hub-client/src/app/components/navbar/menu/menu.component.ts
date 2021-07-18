import { Component, Input, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { MenuLinkModel } from 'src/app/models/menu-link';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() menuLinks: MenuLinkModel[];

  constructor() {

  }

  ngOnInit(): void {

  }

}
