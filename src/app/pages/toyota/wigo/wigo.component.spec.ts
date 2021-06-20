import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WigoComponent } from './wigo.component';

describe('WigoComponent', () => {
  let component: WigoComponent;
  let fixture: ComponentFixture<WigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WigoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
