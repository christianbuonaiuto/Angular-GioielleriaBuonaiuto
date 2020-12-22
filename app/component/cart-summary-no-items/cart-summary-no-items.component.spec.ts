import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSummaryNoItemsComponent } from './cart-summary-no-items.component';

describe('CartSummaryNoItemsComponent', () => {
  let component: CartSummaryNoItemsComponent;
  let fixture: ComponentFixture<CartSummaryNoItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartSummaryNoItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartSummaryNoItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
