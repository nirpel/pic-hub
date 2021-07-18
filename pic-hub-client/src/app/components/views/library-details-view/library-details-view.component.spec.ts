import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryDetailsViewComponent } from './library-details-view.component';

describe('LibraryDetailsViewComponent', () => {
  let component: LibraryDetailsViewComponent;
  let fixture: ComponentFixture<LibraryDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryDetailsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
