import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalAreaAdminListUserComponent } from './personal-area-admin-list-user.component';

describe('PersonalAreaAdminListUserComponent', () => {
  let component: PersonalAreaAdminListUserComponent;
  let fixture: ComponentFixture<PersonalAreaAdminListUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalAreaAdminListUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalAreaAdminListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
