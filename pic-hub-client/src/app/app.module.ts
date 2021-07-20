import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { WebcamModule } from 'ngx-webcam';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/main/app.component';
import { NavigationBarComponent } from './components/navbar/navigation-bar/navigation-bar.component';
import { MenuLinkComponent } from './components/navbar/menu-link/menu-link.component';
import { MenuComponent } from './components/navbar/menu/menu.component';
import { WelcomeViewComponent } from './components/views/welcome-view/welcome-view.component';
import { PermitionsViewComponent } from './components/views/permitions-view/permitions-view.component';
import { LibraryDetailsViewComponent } from './components/views/library-details-view/library-details-view.component';
import { UploadViewComponent } from './components/views/upload-view/upload-view.component';
import { CameraComponent } from './components/image-upload/camera/camera.component';
import { LocalImageUploadComponent } from './components/image-upload/local-image-upload/local-image-upload.component';
import { AlbumViewComponent } from './components/views/album-view/album-view.component';
import { AlbumGridComponent } from './components/album/album-grid/album-grid.component';
import { AlbumListComponent } from './components/album/album-list/album-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MenuLinkComponent,
    MenuComponent,
    WelcomeViewComponent,
    PermitionsViewComponent,
    LibraryDetailsViewComponent,
    UploadViewComponent,
    CameraComponent,
    LocalImageUploadComponent,
    AlbumViewComponent,
    AlbumGridComponent,
    AlbumListComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatTabsModule,
    WebcamModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
