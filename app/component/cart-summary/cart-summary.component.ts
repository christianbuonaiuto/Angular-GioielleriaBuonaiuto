import { Component, OnInit} from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Order } from 'src/app/class/order';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit{


  isAuthenticated: boolean;
  paidFor=false;
  order : Order;

  eventPaidFor(ordero:Order){
    this.paidFor = true;
    this.order = ordero;
  }

  constructor( public oktaAuth: OktaAuthService, private router:Router) {}

  async ngOnInit(){
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    if(!this.isAuthenticated){
      this.router.navigateByUrl("/window-login");
    }
  }
}
