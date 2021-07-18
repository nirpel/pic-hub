import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/main/app.component';
import { NavigationBarComponent } from './components/navbar/navigation-bar/navigation-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuLinkComponent } from './components/navbar/menu-link/menu-link.component';
import { MenuComponent } from './components/navbar/menu/menu.component';
import { WelcomeViewComponent } from './components/views/welcome-view/welcome-view.component';
import { PermitionsViewComponent } from './components/views/permitions-view/permitions-view.component';
import { LibraryDetailsViewComponent } from './components/views/library-details-view/library-details-view.component';
import { UploadViewComponent } from './components/views/upload-view/upload-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MenuLinkComponent,
    MenuComponent,
    WelcomeViewComponent,
    PermitionsViewComponent,
    LibraryDetailsViewComponent,
    UploadViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
