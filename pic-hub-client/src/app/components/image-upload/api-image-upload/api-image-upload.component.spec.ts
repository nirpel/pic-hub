import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiImageUploadComponent } from './api-image-upload.component';

describe('ApiImageUploadComponent', () => {
  let component: ApiImageUploadComponent;
  let fixture: ComponentFixture<ApiImageUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiImageUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiImageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
