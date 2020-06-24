import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionListaComponent } from './operacion-lista.component';

describe('OperacionListaComponent', () => {
  let component: OperacionListaComponent;
  let fixture: ComponentFixture<OperacionListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacionListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacionListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
