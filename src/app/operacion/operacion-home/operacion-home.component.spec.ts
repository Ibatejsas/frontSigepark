import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionHomeComponent } from './operacion-home.component';

describe('OperacionHomeComponent', () => {
  let component: OperacionHomeComponent;
  let fixture: ComponentFixture<OperacionHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacionHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
