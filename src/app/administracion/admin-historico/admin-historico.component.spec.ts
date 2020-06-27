import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHistoricoComponent } from './admin-historico.component';

describe('AdminHistoricoComponent', () => {
  let component: AdminHistoricoComponent;
  let fixture: ComponentFixture<AdminHistoricoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHistoricoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
