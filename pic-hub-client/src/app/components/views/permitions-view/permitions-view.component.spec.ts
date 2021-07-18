import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermitionsViewComponent } from './permitions-view.component';

describe('PermitionsViewComponent', () => {
  let component: PermitionsViewComponent;
  let fixture: ComponentFixture<PermitionsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermitionsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermitionsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
