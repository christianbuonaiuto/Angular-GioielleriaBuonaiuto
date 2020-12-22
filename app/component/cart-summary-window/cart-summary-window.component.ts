import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { GioielleriaBuonaiutoService } from 'src/app/gioielleria-buonaiuto.service';
import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import { Order } from 'src/app/class/order';
import { Product } from 'src/app/class/product';
import { ProductInCart } from 'src/app/class/product-in-cart';
import { FormGroup, FormControl } from '@angular/forms';

declare var paypal;

@Component({
  selector: 'app-cart-summary-window',
  templateUrl: './cart-summary-window.component.html',
  styleUrls: ['./cart-summary-window.component.css']
})
export class CartSummaryWindowComponent implements OnInit {

  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;
  @Output() paidFor = new EventEmitter<any>();
  @Input() emailUser: string;

  commentForm= new FormGroup({
    commentOrder: new FormControl('')
  })

  productsInCart: Array<any>;
  shipment = 9.99;
  orderConfirmed: Order;
  isLoad=false;

  subtotal(quantity:number,price:number){
    let subtotal= quantity*price;
    return Math.round((subtotal + Number.EPSILON) * 100) / 100;
  }


  totalPriceProducts(){
    var tot=0;
    for(var i=0; i<this.productsInCart?.length; i++){
      tot+= this.productsInCart[i].product.price * this.productsInCart[i].quantity;
    }
    return Math.round((tot + Number.EPSILON) * 100) / 100;
  }

  total(){
    let total=this.totalPriceProducts() + this.shipment
    return Math.round((total + Number.EPSILON) * 100) / 100;
  }

  deleteOne(ido:number, modelProduct:string , text:boolean){
    /******************************************************************
     * used to eliminate the product if the client click to eliminate (text true)
     * or product is not available (text false)
     *****************************************************************/
    this.gbService.deleteProductInCart(ido).subscribe( data => {
      if(text){
        alert( modelProduct + " eliminato correttamente!");
      } else {
        alert( modelProduct + " non più disponibile! Verrà automaticamente eliminato dal carrello.");
      }
      window.location.reload()
    });
  }

  constructor(private gbService:GioielleriaBuonaiutoService, private router: Router, public oktaAuth: OktaAuthService) { }


  async ngOnInit(){
    this.emailUser = (await this.oktaAuth.getUser()).preferred_username;

    this.gbService.getAllProductInCartByUser(this.emailUser).subscribe( data => {
      this.productsInCart = data;
      this.isLoad=true;
      if(this.productsInCart?.length == 0){
        //if the are no products in cart
        this.router.navigateByUrl('cart-summary-no-items');
      }
      if(this.totalPriceProducts() > 70){
        this.shipment = 0;
      }

      const listItemProductInCart = data;
      const items = [];
      const totalPaypal = this.total();

      function arrayOfItems(){
        listItemProductInCart.forEach((itemProductInCart) => {
          let nameProduct = itemProductInCart.product.model;
          let priceProduct = itemProductInCart.product.price;
          let quantityProduct = itemProductInCart.quantity;

          let item = {
            name: nameProduct,
            quantity: quantityProduct,
            unit_amount: {
              currency_code: "EUR",
              value: priceProduct
            }
          };
          items.push(item);
        });
        if(totalPaypal <= 70){
          let shipment = {
            name: "Spedizione",
            quantity: 1,
            unit_amount: {
              currency_code: "EUR",
              value: 9.99
            }
          };
          items.push(shipment);
        } else {
          let shipment = {
            name: "Spedizione",
            quantity: 1,
            unit_amount: {
              currency_code: "EUR",
              value: 0
            }
          };
          items.push(shipment);
        }
        return items;
      }

      paypal
          .Buttons({
            createOrder: (data, actions) => {
              //VERIFY QUANTITY ITEMS IN ORDER BEFORE CONFIRMING ORDER
              listItemProductInCart.forEach((itemProductInCart) => {
                this.gbService.getProduct(itemProductInCart.product.code).subscribe( data=> {
                  if(data.quantity < itemProductInCart.quantity){
                    this.deleteOne(itemProductInCart.ido, itemProductInCart.product.model , false);
                  }
                })
              })

              return actions.order.create({
                purchase_units: [
                  {
                    items: arrayOfItems(),
                    amount: {
                      currency_code: "EUR",
                      value: totalPaypal,
                      breakdown: {
                        item_total: {currency_code:"EUR", value: totalPaypal}
                      }
                    }
                  }
                ]
              });
            },
            onApprove: async (data, actions) => {
              this.orderCompleted(this.emailUser, listItemProductInCart,totalPaypal,data.orderID);
              const order = await actions.order.capture();
            },
            onError: err => {
              console.log(err);
            }
          })
          .render(this.paypalElement.nativeElement);
    })
  }

  orderCompleted(emailUser:string, listItems:Array<ProductInCart>, amount:number, idOrder: string){
    let comment = this.commentForm.value.commentOrder;
    this.gbService.addOrder(idOrder ,emailUser, null, amount, comment).subscribe(data => {
      data;

      listItems.forEach(item =>{
        this.gbService.addProductInOrder(data,item.product,item.quantity,item.product.price).subscribe();
      })
      this.gbService.deleteAllProductInCartByUser(emailUser).subscribe();
      this.paidFor.emit(data);
    });

  }

}
