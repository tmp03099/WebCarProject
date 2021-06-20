import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaiThuComponent } from './lai-thu.component';

describe('LaiThuComponent', () => {
  let component: LaiThuComponent;
  let fixture: ComponentFixture<LaiThuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaiThuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaiThuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
