import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViosComponent } from './vios.component';

describe('ViosComponent', () => {
  let component: ViosComponent;
  let fixture: ComponentFixture<ViosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
