import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XeQuaSuDungComponent } from './xe-qua-su-dung.component';

describe('XeQuaSuDungComponent', () => {
  let component: XeQuaSuDungComponent;
  let fixture: ComponentFixture<XeQuaSuDungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XeQuaSuDungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XeQuaSuDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
