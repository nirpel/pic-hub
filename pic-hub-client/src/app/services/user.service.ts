import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isPrivateModeOn: boolean = false;

  constructor() { }

  enterPrivateMode(password: string): boolean {
    this.isPrivateModeOn = password === environment.PRIVATE_MODE;
    return this.isPrivateModeOn;
  }

  exitPrivateMode() {
    this.isPrivateModeOn = false;
  }
}
