import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorollaAltisComponent } from './corolla-altis.component';

describe('CorollaAltisComponent', () => {
  let component: CorollaAltisComponent;
  let fixture: ComponentFixture<CorollaAltisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorollaAltisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorollaAltisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
