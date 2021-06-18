import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyotaComponent } from './toyota.component';

describe('ToyotaComponent', () => {
  let component: ToyotaComponent;
  let fixture: ComponentFixture<ToyotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToyotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToyotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
