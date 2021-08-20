import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermitionsComponent } from './permitions.component';

describe('PermitionsComponent', () => {
  let component: PermitionsComponent;
  let fixture: ComponentFixture<PermitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermitionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
