import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiluxComponent } from './hilux.component';

describe('HiluxComponent', () => {
  let component: HiluxComponent;
  let fixture: ComponentFixture<HiluxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiluxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiluxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
