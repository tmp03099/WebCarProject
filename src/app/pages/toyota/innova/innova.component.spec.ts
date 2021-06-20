import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovaComponent } from './innova.component';

describe('InnovaComponent', () => {
  let component: InnovaComponent;
  let fixture: ComponentFixture<InnovaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnovaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
