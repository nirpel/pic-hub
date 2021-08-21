import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { WebcamModule } from 'ngx-webcam';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

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
import { GalleryComponent } from './components/album/gallery/gallery.component';
import { ImageCardComponent } from './components/album/image-card/image-card.component';
import { ImageDetailsComponent } from './components/album/image-details/image-details.component';
import { AddCategoryComponent } from './components/categories/add-category/add-category.component';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './components/album/map/map.component';
import { environment } from 'src/environments/environment';
import { PrivateModeViewComponent } from './components/views/private-mode-view/private-mode-view.component';
import { ApiImageUploadComponent } from './components/image-upload/api-image-upload/api-image-upload.component';
import { CheckboxComponent } from './components/elements/checkbox/checkbox.component';
import { PermitionsComponent } from './components/forms/permitions/permitions.component';
import { RadioButtonComponent } from './components/elements/radio-button/radio-button.component';

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
    GalleryComponent,
    ImageCardComponent,
    ImageDetailsComponent,
    AddCategoryComponent,
    MapComponent,
    PrivateModeViewComponent,
    ApiImageUploadComponent,
    CheckboxComponent,
    PermitionsComponent,
    RadioButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatTabsModule,
    WebcamModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatAutocompleteModule,
    AgmCoreModule.forRoot({
      apiKey: environment.GOOGLE_API_KEY
    }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
