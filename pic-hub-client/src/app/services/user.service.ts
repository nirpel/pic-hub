import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

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

  constructor() { }

  enterPrivateMode(password: string): boolean {
    this.isPrivateModeOn = password === environment.PRIVATE_MODE;
    return this.isPrivateModeOn;
  }

  exitPrivateMode() {
    this.isPrivateModeOn = false;
  }
}
