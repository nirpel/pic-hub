import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageUploadService } from 'src/app/services/image-upload.service';

@Component({
  selector: 'app-upload-view',
  templateUrl: './upload-view.component.html',
  styleUrls: ['./upload-view.component.css']
})
export class UploadViewComponent implements OnInit {

  uploadService: ImageUploadService;

  constructor(uploadService: ImageUploadService, private router: Router) {
    this.uploadService = uploadService;
  }

  ngOnInit(): void {
  }

  doneClickHandler(): void {
    if (this.uploadService.imageFile) {
      this.uploadService.upload().subscribe((data) => {
        console.log(data);
      }, (err) => {
        console.error(err);
      }, () => {
        this.router.navigate(['']);
      });
    } else {
      this.router.navigate(['']);
    }
  }
}
