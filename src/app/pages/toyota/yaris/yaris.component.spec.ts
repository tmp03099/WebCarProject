import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YarisComponent } from './yaris.component';

describe('YarisComponent', () => {
  let component: YarisComponent;
  let fixture: ComponentFixture<YarisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YarisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YarisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
