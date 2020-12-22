import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalAreaAdminViewProfileComponent } from './personal-area-admin-view-profile.component';

describe('PersonalAreaAdminViewProfileComponent', () => {
  let component: PersonalAreaAdminViewProfileComponent;
  let fixture: ComponentFixture<PersonalAreaAdminViewProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalAreaAdminViewProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalAreaAdminViewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
