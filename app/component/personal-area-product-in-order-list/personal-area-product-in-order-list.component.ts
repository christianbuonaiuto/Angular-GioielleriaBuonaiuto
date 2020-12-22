import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { GioielleriaBuonaiutoService } from 'src/app/gioielleria-buonaiuto.service';
import { ProductInOrder } from 'src/app/class/product-in-order';

@Component({
  selector: 'app-personal-area-product-in-order-list',
  templateUrl: './personal-area-product-in-order-list.component.html',
  styleUrls: ['./personal-area-product-in-order-list.component.css']
})
export class PersonalAreaProductInOrderListComponent implements OnInit {


  @Input() orderId : string;
  @Input() admin : boolean;
  @Output() codeProduct = new EventEmitter();
  @Output() returnToListProduct= new EventEmitter();

  listProductInOrder: Array<ProductInOrder>;
  count=0;

  constructor(private gbService:GioielleriaBuonaiutoService) { }

  ngOnInit(): void {
    this.gbService.getAllProductInOrderByOrder(this.orderId).subscribe(data => {
      this.listProductInOrder=data;
    })
  }

  number(){
    return this.count+=1;
  }

  goToProduct(code:string){
    this.codeProduct.emit(code);
  }

  returnToBack(){
    if(this.admin){
      this.returnToListProduct.emit(5);
    } else {
      this.returnToListProduct.emit(2);
    }
  }
}
