import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalAreaAdminListProductEditProductComponent } from './personal-area-admin-list-product-edit-product.component';

describe('PersonalAreaAdminListProductEditProductComponent', () => {
  let component: PersonalAreaAdminListProductEditProductComponent;
  let fixture: ComponentFixture<PersonalAreaAdminListProductEditProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalAreaAdminListProductEditProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalAreaAdminListProductEditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
