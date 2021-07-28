import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBars, faCoffee, faUserCircle, faCamera, faUserCheck, faImages, faBook, faFileAlt } from '@fortawesome/free-solid-svg-icons';
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
    { title: 'Permitions', icon: faUserCheck, onClick: () => this.router.navigate(['permitions']) },
    { title: 'Library Details', icon: faBook, onClick: () => this.router.navigate(['library-details']) },
    { title: 'Third User', icon: faCoffee, onClick: () => console.log('Third') },
    { title: 'Fourth User', icon: faCoffee, onClick: () => console.log('Fourth') },
    { title: 'Fifth User', icon: faCoffee, onClick: () => console.log('Fifth') }
  ];

  burgerMenuLinks: MenuLinkModel[] = [
    { title: 'Upload Photo', icon: faCamera, onClick: () => this.router.navigate(['upload']) },
    { title: 'Album Gallery', icon: faImages, onClick: () => this.router.navigate(['']) },
    { title: 'Manage Categories', icon: faFileAlt, onClick: () => this.router.navigate(['categories']) },
    { title: 'Fourth Burger', icon: faCoffee, onClick: () => console.log('Fourth') },
    { title: 'Fifth Burger', icon: faCoffee, onClick: () => console.log('Fifth') }
  ];

  constructor(private router: Router) { }

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
