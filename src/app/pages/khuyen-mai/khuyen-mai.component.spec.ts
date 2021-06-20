import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhuyenMaiComponent } from './khuyen-mai.component';

describe('KhuyenMaiComponent', () => {
  let component: KhuyenMaiComponent;
  let fixture: ComponentFixture<KhuyenMaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhuyenMaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KhuyenMaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
