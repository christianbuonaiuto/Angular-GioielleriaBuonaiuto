import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GioielleriaBuonaiutoService } from 'src/app/gioielleria-buonaiuto.service';
import { Product } from 'src/app/class/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-area-admin-add-product',
  templateUrl: './personal-area-admin-add-product.component.html',
  styleUrls: ['./personal-area-admin-add-product.component.css']
})
export class PersonalAreaAdminAddProductComponent implements OnInit {


  addProductForm = new FormGroup({
    codeProduct: new FormControl('',[Validators.required]),
    modelProduct: new FormControl('',[Validators.required]),
    brandProduct: new FormControl('',[Validators.required]),
    descriptionProduct: new FormControl(''),
    categoryProduct: new FormControl('',[Validators.required]),
    quantityProduct: new FormControl('',[Validators.required]),
    priceProduct: new FormControl('',[Validators.required])
  })

  constructor(private gbService:GioielleriaBuonaiutoService, private router:Router) { }

  ngOnInit(): void {
  }

  add(){
    let product = new Product();
    product.code = this.addProductForm.value.codeProduct;
    product.model = this.addProductForm.value.modelProduct;
    product.brand = this.addProductForm.value.brandProduct;
    product.description = this.addProductForm.value.descriptionProduct;
    product.category = this.addProductForm.value.categoryProduct;
    product.quantity = this.addProductForm.value.quantityProduct;
    product.price = this.addProductForm.value.priceProduct;
    this.gbService.addProduct(product).subscribe(
      data => {
        alert("Prodotto "+ product.code +" aggiunto correttamente.");
        this.addProductForm.reset();
      },
      error => {
        alert("CODICE PRODOTTO GIA' PRESENTE NEL SISTEMA.");
    });


  }

}
