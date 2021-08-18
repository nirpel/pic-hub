import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateModeViewComponent } from './private-mode-view.component';

describe('PrivateModeViewComponent', () => {
  let component: PrivateModeViewComponent;
  let fixture: ComponentFixture<PrivateModeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateModeViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateModeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
