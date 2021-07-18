import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryDetailsViewComponent } from './components/views/library-details-view/library-details-view.component';
import { PermitionsViewComponent } from './components/views/permitions-view/permitions-view.component';
import { UploadViewComponent } from './components/views/upload-view/upload-view.component';
import { WelcomeViewComponent } from './components/views/welcome-view/welcome-view.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeViewComponent },
  { path: 'permitions', component: PermitionsViewComponent },
  { path: 'library-details', component: LibraryDetailsViewComponent },
  { path: 'upload', component: UploadViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
