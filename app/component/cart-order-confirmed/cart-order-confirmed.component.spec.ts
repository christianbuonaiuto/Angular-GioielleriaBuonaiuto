import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartOrderConfirmedComponent } from './cart-order-confirmed.component';

describe('CartOrderConfirmedComponent', () => {
  let component: CartOrderConfirmedComponent;
  let fixture: ComponentFixture<CartOrderConfirmedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartOrderConfirmedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartOrderConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
