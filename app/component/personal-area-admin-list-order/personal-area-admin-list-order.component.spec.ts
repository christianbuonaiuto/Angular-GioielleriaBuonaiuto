import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalAreaAdminListOrderComponent } from './personal-area-admin-list-order.component';

describe('PersonalAreaAdminListOrderComponent', () => {
  let component: PersonalAreaAdminListOrderComponent;
  let fixture: ComponentFixture<PersonalAreaAdminListOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalAreaAdminListOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalAreaAdminListOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
