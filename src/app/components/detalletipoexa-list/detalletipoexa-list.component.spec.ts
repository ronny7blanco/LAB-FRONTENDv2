import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalletipoexaListComponent } from './detalletipoexa-list.component';

describe('DetalletipoexaListComponent', () => {
  let component: DetalletipoexaListComponent;
  let fixture: ComponentFixture<DetalletipoexaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalletipoexaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalletipoexaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
