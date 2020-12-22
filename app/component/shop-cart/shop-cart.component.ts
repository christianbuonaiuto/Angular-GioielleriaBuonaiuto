import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductInCart } from 'src/app/class/product-in-cart';
import { GioielleriaBuonaiutoService } from 'src/app/gioielleria-buonaiuto.service';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {

  @Input() listProductInCart: Array<ProductInCart>;
  @Output() productRemoved = new EventEmitter<any>();


  totalProduct(){
    var tot=0;
    for(var i=0; i<this.listProductInCart?.length; i++){
      tot+= this.listProductInCart[i].quantity;
    }
    //total product select
    return tot;
  }

  totalPriceProducts(){
    var tot=0;
    for(var i=0; i<this.listProductInCart?.length; i++){
      tot+= this.listProductInCart[i].product.price * this.listProductInCart[i].quantity;
    }
    //total price product selected
    return Math.round((tot + Number.EPSILON) * 100) / 100;
  }

  removeProductOneQty(productInCart:ProductInCart){
    if(productInCart.quantity == 1){
      this.productRemoved.emit(productInCart);
    } else {
      this.gbService.editProductInCartQuantity(productInCart.ido,productInCart.quantity-=1).subscribe();
    }
  }

  removeProduct(productInCart:ProductInCart){
    this.productRemoved.emit(productInCart);
  }

  constructor(private gbService:GioielleriaBuonaiutoService) { }

  ngOnInit(): void {
  }

}
