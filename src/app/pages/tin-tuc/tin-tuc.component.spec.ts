import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinTucComponent } from './tin-tuc.component';

describe('TinTucComponent', () => {
  let component: TinTucComponent;
  let fixture: ComponentFixture<TinTucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinTucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TinTucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
