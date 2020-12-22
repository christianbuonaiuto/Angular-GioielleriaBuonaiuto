import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalAreaProductInOrderListComponent } from './personal-area-product-in-order-list.component';

describe('PersonalAreaProductInOrderListComponent', () => {
  let component: PersonalAreaProductInOrderListComponent;
  let fixture: ComponentFixture<PersonalAreaProductInOrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalAreaProductInOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalAreaProductInOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
