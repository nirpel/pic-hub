import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { faBars, faCoffee, faUserCircle, faCamera, faUserCheck, faImages, faBook, faFileAlt, faLock } from '@fortawesome/free-solid-svg-icons';
import { MenuLinkModel } from 'src/app/models/menu-link';
import { AddCategoryComponent } from '../../categories/add-category/add-category.component';

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
    {
      title: 'Permitions',
      icon: faUserCheck,
      onClick: () => {
        this.router.navigate(['permitions']);
        this.toggleUserMenu();
      }
    },
    {
      title: 'Library Details',
      icon: faBook,
      onClick: () => {
        this.router.navigate(['library-details']);
        this.toggleUserMenu();
      }
    },
    {
      title: 'Private Mode',
      icon: faLock,
      onClick: () => {
        this.router.navigate(['private-mode']);
        this.toggleUserMenu();
      }
    }
  ];

  burgerMenuLinks: MenuLinkModel[] = [
    {
      title: 'Upload Photo',
      icon: faCamera,
      onClick: () => {
        this.router.navigate(['upload']);
        this.toggleBurgerMenu();
      }
    },
    {
      title: 'Album Gallery',
      icon: faImages,
      onClick: () => {
        this.router.navigate(['']);
        this.toggleBurgerMenu();
      }
    },
    {
      title: 'Manage Categories',
      icon: faFileAlt,
      onClick: () => {
        this.dialog.open(AddCategoryComponent);
        this.toggleBurgerMenu();
      }
    }
  ];

  constructor(private router: Router, private dialog: MatDialog) { }

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

  onLogoClick(): void {
    this.router.navigate(['']);
  }

}
