import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalAreaAdminAddProductComponent } from './personal-area-admin-add-product.component';

describe('PersonalAreaAdminAddProductComponent', () => {
  let component: PersonalAreaAdminAddProductComponent;
  let fixture: ComponentFixture<PersonalAreaAdminAddProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalAreaAdminAddProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalAreaAdminAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
