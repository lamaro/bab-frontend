import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CerveceriasComponent } from './cervecerias.component';

describe('CerveceriasComponent', () => {
  let component: CerveceriasComponent;
  let fixture: ComponentFixture<CerveceriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CerveceriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CerveceriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
