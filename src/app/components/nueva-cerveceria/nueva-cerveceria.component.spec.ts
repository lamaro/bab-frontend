import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaCerveceriaComponent } from './nueva-cerveceria.component';

describe('NuevaCerveceriaComponent', () => {
  let component: NuevaCerveceriaComponent;
  let fixture: ComponentFixture<NuevaCerveceriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaCerveceriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaCerveceriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
