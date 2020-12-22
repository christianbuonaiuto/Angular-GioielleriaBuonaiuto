import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalAreaAdminListProductComponent } from './personal-area-admin-list-product.component';

describe('PersonalAreaAdminListProductComponent', () => {
  let component: PersonalAreaAdminListProductComponent;
  let fixture: ComponentFixture<PersonalAreaAdminListProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalAreaAdminListProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalAreaAdminListProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
