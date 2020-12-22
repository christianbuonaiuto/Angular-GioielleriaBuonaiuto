import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GioielleriaBuonaiutoService } from 'src/app/gioielleria-buonaiuto.service';

@Component({
  selector: 'app-shop-categories',
  templateUrl: './shop-categories.component.html',
  styleUrls: ['./shop-categories.component.css']
})
export class ShopCategoriesComponent implements OnInit {

  @Output() listProductByCategory = new EventEmitter();

  categories: Array<string>;
  brands: Array<string>;

  constructor(private gbService: GioielleriaBuonaiutoService) { }

  viewByCategory(cat:string){
    this.gbService.getByCategory(cat).subscribe(data => {
      this.listProductByCategory.emit(data);
    })
  }

  viewByBrand(brand:string){
    this.gbService.getByBrand(brand).subscribe(data => {
      this.listProductByCategory.emit(data);
    })
  }

  ngOnInit(): void {
    this.gbService.getAllCategories().subscribe( data => {
      this.categories = data;
    })
    this.gbService.getAllNameBrands().subscribe( data => {
      this.brands = data;
    })
  }

}
