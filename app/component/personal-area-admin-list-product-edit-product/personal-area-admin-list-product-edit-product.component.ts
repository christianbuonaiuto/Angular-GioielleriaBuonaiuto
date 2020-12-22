import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GioielleriaBuonaiutoService } from 'src/app/gioielleria-buonaiuto.service';
import { Product } from 'src/app/class/product';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-personal-area-admin-list-product-edit-product',
  templateUrl: './personal-area-admin-list-product-edit-product.component.html',
  styleUrls: ['./personal-area-admin-list-product-edit-product.component.css']
})
export class PersonalAreaAdminListProductEditProductComponent implements OnInit {

  @Input() codeProductView: string;
  @Output() returnToListProduct= new EventEmitter();

  product: Product;

  editProductForm = new FormGroup({
    descriptionProduct: new FormControl(),
    quantityProduct: new FormControl(),
    priceProduct: new FormControl()
  })



  constructor(private gbService:GioielleriaBuonaiutoService) { }

  ngOnInit(): void {
    this.gbService.getProduct(this.codeProductView).subscribe(data => {
      this.product = data;
      this.editProductForm.patchValue({descriptionProduct: this.product.description});
      this.editProductForm.patchValue({quantityProduct: this.product.quantity});
      this.editProductForm.patchValue({priceProduct: this.product.price});
    });

  }

  edit(){
    this.product.description = this.editProductForm.value.descriptionProduct;
    this.product.quantity = this.editProductForm.value.quantityProduct;
    this.product.price = this.editProductForm.value.priceProduct;
    this.gbService.editDescriptionQuantityPriceProduct(this.product).subscribe();
    alert("Prodotto "+ this.product.code +" modificato correttamente.");
    this.returnToBack();
  }

  returnToBack(){
    this.returnToListProduct.emit();
  }

}
