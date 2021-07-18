import { Component, OnInit } from '@angular/core';
import { faBars, faCoffee, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { MenuLinkModel } from 'src/app/models/menu-link';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  barsIcon = faBars;
  userIcon = faUserCircle;
  isUserMenuOpen: boolean;
  isBurgerMenuOpen: boolean;

  userMenuLinks: MenuLinkModel[] = [
    { title: 'First User', icon: faCoffee, onClick: () => console.log('First') },
    { title: 'Second User', icon: faCoffee, onClick: () => console.log('Second') },
    { title: 'Third User', icon: faCoffee, onClick: () => console.log('Third') },
    { title: 'Fourth User', icon: faCoffee, onClick: () => console.log('Fourth') },
    { title: 'Fifth User', icon: faCoffee, onClick: () => console.log('Fifth') }
  ];

  burgerMenuLinks: MenuLinkModel[] = [
    { title: 'First Burger', icon: faCoffee, onClick: () => console.log('First') },
    { title: 'Second Burger', icon: faCoffee, onClick: () => console.log('Second') },
    { title: 'Third Burger', icon: faCoffee, onClick: () => console.log('Third') },
    { title: 'Fourth Burger', icon: faCoffee, onClick: () => console.log('Fourth') },
    { title: 'Fifth Burger', icon: faCoffee, onClick: () => console.log('Fifth') }
  ];

  constructor() { }

  ngOnInit(): void {
    this.isUserMenuOpen = false;
    this.isBurgerMenuOpen = false;
  }

  toggleBurgerMenu(): void {
    if (this.isUserMenuOpen && !this.isBurgerMenuOpen) {
      this.isUserMenuOpen = false;
    }
    this.isBurgerMenuOpen = !this.isBurgerMenuOpen;
  }

  toggleUserMenu(): void {
    if (!this.isUserMenuOpen && this.isBurgerMenuOpen) {
      this.isBurgerMenuOpen = false;
    }
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

}
