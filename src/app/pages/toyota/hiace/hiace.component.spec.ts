import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiaceComponent } from './hiace.component';

describe('HiaceComponent', () => {
  let component: HiaceComponent;
  let fixture: ComponentFixture<HiaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
