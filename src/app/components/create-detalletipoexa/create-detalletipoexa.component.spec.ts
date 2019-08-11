import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDetalletipoexaComponent } from './create-detalletipoexa.component';

describe('CreateDetalletipoexaComponent', () => {
  let component: CreateDetalletipoexaComponent;
  let fixture: ComponentFixture<CreateDetalletipoexaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDetalletipoexaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDetalletipoexaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
