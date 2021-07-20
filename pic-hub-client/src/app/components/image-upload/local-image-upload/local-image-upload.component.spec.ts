import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalImageUploadComponent } from './local-image-upload.component';

describe('LocalImageUploadComponent', () => {
  let component: LocalImageUploadComponent;
  let fixture: ComponentFixture<LocalImageUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalImageUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalImageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
