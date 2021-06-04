import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyContextComponent } from './body-context.component';

describe('BodyContextComponent', () => {
  let component: BodyContextComponent;
  let fixture: ComponentFixture<BodyContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyContextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
