import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandPradoComponent } from './land-prado.component';

describe('LandPradoComponent', () => {
  let component: LandPradoComponent;
  let fixture: ComponentFixture<LandPradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandPradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandPradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
