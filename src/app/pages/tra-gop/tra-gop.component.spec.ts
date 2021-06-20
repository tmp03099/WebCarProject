import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraGopComponent } from './tra-gop.component';

describe('TraGopComponent', () => {
  let component: TraGopComponent;
  let fixture: ComponentFixture<TraGopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraGopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraGopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
