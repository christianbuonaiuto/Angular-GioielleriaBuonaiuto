import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GioielleriaBuonaiutoService } from 'src/app/gioielleria-buonaiuto.service';
import { Order } from 'src/app/class/order';
import { ProductInOrder } from 'src/app/class/product-in-order';

@Component({
  selector: 'app-personal-area-all-product-in-order-by-user',
  templateUrl: './personal-area-all-product-in-order-by-user.component.html',
  styleUrls: ['./personal-area-all-product-in-order-by-user.component.css']
})
export class PersonalAreaAllProductInOrderByUserComponent implements OnInit {

  @Input() emailUser: string;
  @Output() codeProduct = new EventEmitter();

  constructor(private gbService:GioielleriaBuonaiutoService) { }

  listOrder: Array<ProductInOrder>;

  numberViewProductInOrder: number = 8;
  pageIndex: number = 1;

  ngOnInit(): void {
    this.gbService.getAllProductInOrderByEmail(this.emailUser).subscribe(data => {
      this.listOrder = data;
      console.log(this.listOrder);
    })
  }

  goToProduct(code:string){
    this.codeProduct.emit(code);
  }

}
