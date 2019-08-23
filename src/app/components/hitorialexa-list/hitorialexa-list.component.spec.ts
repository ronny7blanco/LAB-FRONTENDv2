import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HitorialexaListComponent } from './hitorialexa-list.component';

describe('HitorialexaListComponent', () => {
  let component: HitorialexaListComponent;
  let fixture: ComponentFixture<HitorialexaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HitorialexaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HitorialexaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
