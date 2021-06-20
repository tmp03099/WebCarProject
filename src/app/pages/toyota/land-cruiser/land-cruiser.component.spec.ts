import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandCruiserComponent } from './land-cruiser.component';

describe('LandCruiserComponent', () => {
  let component: LandCruiserComponent;
  let fixture: ComponentFixture<LandCruiserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandCruiserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandCruiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
