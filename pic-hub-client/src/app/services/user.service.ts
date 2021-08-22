import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CookieService } from './cookie.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  allowCamera: boolean = false;
  allowLocation: boolean = false;
  allowPrivateMode: boolean = false;
  isPrivateModeOn: boolean = false;
  libraryName: string;
  privateModePassword: string;

  constructor(private cookieService: CookieService) {
    this.initLibraryName();
    this.initPassword();
    this.initPrivateMode();
    this.initPermitions();
  }

  enterPrivateMode(password: string): boolean {
    this.isPrivateModeOn = password === this.privateModePassword;
    if (this.isPrivateModeOn) {
      this.cookieService.setCookie('private-mode', 'on');
    }
    return this.isPrivateModeOn;
  }

  exitPrivateMode() {
    this.cookieService.setCookie('private-mode', 'off');
    this.isPrivateModeOn = false;
  }

  initPermitions(): void {
    let permitionsCookieValue = this.cookieService.getCookie('permitions');
    if (!permitionsCookieValue || permitionsCookieValue !== 'accepted') {
      this.setAllPermitions(false);
    } else {
      this.setAllPermitions(true);
    }
  }

  initPrivateMode() {
    let privateMode = this.cookieService.getCookie('private-mode');
    if (!privateMode || privateMode !== 'on') {
      this.exitPrivateMode();
    } else {
      this.enterPrivateMode(this.privateModePassword);
    }
  }

  initLibraryName() {
    let libraryName = this.cookieService.getCookie('library-name');
    if (libraryName) {
      this.libraryName = libraryName;
    }
  }

  initPassword() {
    let password = this.cookieService.getCookie('private-mode-password');
    if (password) {
      this.privateModePassword = password;
    }
  }

  setAllPermitions(isAllowed: boolean) {
    this.allowCamera = isAllowed;
    this.allowLocation = isAllowed;
    this.allowPrivateMode = isAllowed;
  }
}
