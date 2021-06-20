import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorollaCrossComponent } from './corolla-cross.component';

describe('CorollaCrossComponent', () => {
  let component: CorollaCrossComponent;
  let fixture: ComponentFixture<CorollaCrossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorollaCrossComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorollaCrossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
