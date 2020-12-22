import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalAreaAllProductInOrderByUserComponent } from './personal-area-all-product-in-order-by-user.component';

describe('PersonalAreaAllProductInOrderByUserComponent', () => {
  let component: PersonalAreaAllProductInOrderByUserComponent;
  let fixture: ComponentFixture<PersonalAreaAllProductInOrderByUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalAreaAllProductInOrderByUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalAreaAllProductInOrderByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
