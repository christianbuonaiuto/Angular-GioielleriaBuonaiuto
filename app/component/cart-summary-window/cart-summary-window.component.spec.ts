import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSummaryWindowComponent } from './cart-summary-window.component';

describe('CartSummaryWindowComponent', () => {
  let component: CartSummaryWindowComponent;
  let fixture: ComponentFixture<CartSummaryWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartSummaryWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartSummaryWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
