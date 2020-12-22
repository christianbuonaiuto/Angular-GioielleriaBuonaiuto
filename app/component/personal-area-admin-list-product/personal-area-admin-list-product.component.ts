import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/class/product';
import { GioielleriaBuonaiutoService } from 'src/app/gioielleria-buonaiuto.service';

@Component({
  selector: 'app-personal-area-admin-list-product',
  templateUrl: './personal-area-admin-list-product.component.html',
  styleUrls: ['./personal-area-admin-list-product.component.css']
})
export class PersonalAreaAdminListProductComponent implements OnInit {

  @Output() codeProduct = new EventEmitter();

  listProduct: Array<Product>;

  numberViewProduct: number = 8;
  pageIndex: number = 1;

  constructor(private gbService: GioielleriaBuonaiutoService) { }

  ngOnInit(): void {
    this.gbService.getAllProducts().subscribe(data => {
      this.listProduct = data;
    })
  }

  goToEditProduct(code:string){
    this.codeProduct.emit(code);
  }

}
