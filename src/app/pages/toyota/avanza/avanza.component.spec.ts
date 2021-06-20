import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvanzaComponent } from './avanza.component';

describe('AvanzaComponent', () => {
  let component: AvanzaComponent;
  let fixture: ComponentFixture<AvanzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvanzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvanzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
