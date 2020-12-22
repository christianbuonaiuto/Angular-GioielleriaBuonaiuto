import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from 'src/app/class/product';

@Component({
  selector: 'app-shop-list-product',
  templateUrl: './shop-list-product.component.html',
  styleUrls: ['./shop-list-product.component.css']
})
export class ShopListProductComponent implements OnInit {

  @Input() listProduct: Array<Product>;
  @Output() productAdded = new EventEmitter();

  numberViewProduct: number = 6;
  pageIndex: number = 1;


  addProduct(product:Product){
    this.productAdded.emit(product);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
