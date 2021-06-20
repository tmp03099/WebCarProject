import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamryComponent } from './camry.component';

describe('CamryComponent', () => {
  let component: CamryComponent;
  let fixture: ComponentFixture<CamryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
