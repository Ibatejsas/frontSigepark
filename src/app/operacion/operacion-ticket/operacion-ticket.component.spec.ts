import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionTicketComponent } from './operacion-ticket.component';

describe('OperacionTicketComponent', () => {
  let component: OperacionTicketComponent;
  let fixture: ComponentFixture<OperacionTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacionTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacionTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
