import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GioielleriaBuonaiutoService } from 'src/app/gioielleria-buonaiuto.service';
import { Order } from 'src/app/class/order';

@Component({
  selector: 'app-personal-area-order-list',
  templateUrl: './personal-area-order-list.component.html',
  styleUrls: ['./personal-area-order-list.component.css']
})
export class PersonalAreaOrderListComponent implements OnInit {

  @Input() emailUser: string;
  @Output() order = new EventEmitter();

  listOrder: Array<Order>;

  numberViewOrder: number = 8;
  pageIndex: number = 1;

  constructor(private gbService:GioielleriaBuonaiutoService,) { }



  ngOnInit(): void {
    this.gbService.getOrdersByEmail(this.emailUser).subscribe(data => {
      this.listOrder = data;
    })

  }

  listProductForName(orderId:string){
    this.gbService.getAllProductInOrderByOrder(orderId).subscribe( data =>{
      return data;
    })
  }

  goToProductInOrderList(orderIdo:string){
    this.order.emit(orderIdo);
  }

}
