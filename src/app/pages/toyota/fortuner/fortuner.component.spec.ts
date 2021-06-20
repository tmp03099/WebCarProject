import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortunerComponent } from './fortuner.component';

describe('FortunerComponent', () => {
  let component: FortunerComponent;
  let fixture: ComponentFixture<FortunerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FortunerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FortunerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
