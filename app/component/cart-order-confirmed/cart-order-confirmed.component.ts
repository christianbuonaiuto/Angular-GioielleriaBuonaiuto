import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/class/order';

@Component({
  selector: 'app-cart-order-confirmed',
  templateUrl: './cart-order-confirmed.component.html',
  styleUrls: ['./cart-order-confirmed.component.css']
})
export class CartOrderConfirmedComponent implements OnInit {

  @Input() orderConfirmed = new Order();

  constructor() { }

  ngOnInit(): void {
  }

}
