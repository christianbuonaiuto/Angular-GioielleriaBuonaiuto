import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Order } from 'src/app/class/order';
import { GioielleriaBuonaiutoService } from 'src/app/gioielleria-buonaiuto.service';

@Component({
  selector: 'app-personal-area-admin-list-order',
  templateUrl: './personal-area-admin-list-order.component.html',
  styleUrls: ['./personal-area-admin-list-order.component.css']
})
export class PersonalAreaAdminListOrderComponent implements OnInit {

  @Input() emailUser: string;
  @Output() order = new EventEmitter();
  @Output() backListUser = new EventEmitter();

  listOrder: Array<Order>;

  numberViewOrder: number = 8;
  pageIndex: number = 1;

  constructor(private gbService:GioielleriaBuonaiutoService) { }



  ngOnInit(): void {
    if(this.emailUser == null){
      this.gbService.getAllOrders().subscribe(data => {
        this.listOrder = data;
      })
    } else {
      this.gbService.getOrdersByEmail(this.emailUser).subscribe(data =>{
        this.listOrder = data;
      })
    }

  }


  goToProductInOrderList(orderIdo:string){
    this.order.emit(orderIdo);
  }

  backToListUser(){
    this.backListUser.emit();
  }

}
