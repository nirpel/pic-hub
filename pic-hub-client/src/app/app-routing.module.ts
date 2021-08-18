import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumViewComponent } from './components/views/album-view/album-view.component';
import { LibraryDetailsViewComponent } from './components/views/library-details-view/library-details-view.component';
import { PermitionsViewComponent } from './components/views/permitions-view/permitions-view.component';
import { PrivateModeViewComponent } from './components/views/private-mode-view/private-mode-view.component';
import { UploadViewComponent } from './components/views/upload-view/upload-view.component';
import { WelcomeViewComponent } from './components/views/welcome-view/welcome-view.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeViewComponent },
  { path: 'permitions', component: PermitionsViewComponent },
  { path: 'library-details', component: LibraryDetailsViewComponent },
  { path: 'upload', component: UploadViewComponent },
  { path: 'private-mode', component: PrivateModeViewComponent },
  { path: '', component: AlbumViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
