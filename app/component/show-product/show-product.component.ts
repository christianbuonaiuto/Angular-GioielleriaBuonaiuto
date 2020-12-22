import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/class/product';
import { GioielleriaBuonaiutoService } from 'src/app/gioielleria-buonaiuto.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {

  @Input() codeProductView: string;
  @Output() returnToListProduct= new EventEmitter();

  param:string;

  product: Product;
  constructor(private route:ActivatedRoute, private gbService:GioielleriaBuonaiutoService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.param = params['codeProduct'];
      });
    if(this.param == null){
      this.gbService.getProduct(this.codeProductView).subscribe(data =>{
        this.product = data;
      })
    } else {
      this.gbService.getProduct(this.param).subscribe(data => {
        this.product = data;
      })
    }
  }

  returnToBack(){
    this.returnToListProduct.emit();
  }

}
