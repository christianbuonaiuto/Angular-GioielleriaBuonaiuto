import { Component, OnInit} from '@angular/core';
import { Product } from 'src/app/class/product';
import { GioielleriaBuonaiutoService } from 'src/app/gioielleria-buonaiuto.service';
import { ProductInCart } from 'src/app/class/product-in-cart';
import { OktaAuthService } from '@okta/okta-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{


  isAuthenticated: boolean;
  products: Array<Product>
  emailUser: string;
  selectOrderBy: number=0;
  isLoad=false;

  //listCart
  cartProductList = Array<ProductInCart>();

  /***************************
   * method shop category output
   ***************************/

  changeListProductByCategory(list:Array<Product>){
    this.products=list;
  }

  /******************************************
   * method from shop list product to shop cart
   *****************************************/

  addProductToCart(productSelect:Product){
    if(productSelect.quantity == 0){
      alert("Prodotto "+ productSelect.code +" esaurito");
      return;
    }
    const productExistInCart = this.cartProductList.find(({product}) => product.code === productSelect.code);
    if(!productExistInCart){
      this.gbService.addProductInCart(this.emailUser, productSelect, 1).subscribe(data =>{
        this.cartProductList.push(data);
      })
      return;
    }
    if(productExistInCart && (productSelect.quantity <= productExistInCart.quantity)){
      alert("Prodotto "+ productSelect.code +" selezionata quantità massima!");
      return;
    }// if productExistiInCart and quantity selected are Ok!
    this.gbService.editProductInCartQuantity(productExistInCart.ido,productExistInCart.quantity+=1).subscribe();
  }

  /******************************************
   * method shop cart
   *****************************************/

  removeProduct(productInCartSelect:ProductInCart){
    this.cartProductList = this.cartProductList.filter(({ido}) => ido !== productInCartSelect.ido);
    this.gbService.deleteProductInCart(productInCartSelect.ido).subscribe();
  }


  constructor(private gbService:GioielleriaBuonaiutoService, public oktaAuth: OktaAuthService, public router:Router) { }


  /***********************************
   * order by
   **********************************/
  changeListProduct(){
    if(this.selectOrderBy==0){
      this.gbService.getAllProducts().subscribe(data => {
        this.products = data;
        // Visualizza tutti i prodotti
      })
    }
    if(this.selectOrderBy == 1){
      this.gbService.getAllProductsOrderByPriceIncr().subscribe(data => {
        this.products = data;
        //Prezzo: dal più economico
      })
    }
    if(this.selectOrderBy == 2){
      this.gbService.getAllProductsOrderByPriceDecr().subscribe(data => {
        this.products = data;
        //Prezzo: dal più caro
      })
    }
  }




  async ngOnInit(){
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    if(!this.isAuthenticated){
      this.router.navigateByUrl("/window-login");
    }
    this.emailUser = (await this.oktaAuth.getUser()).preferred_username;
    this.isLoad = true;
    this.gbService.getAllProductsAvailable().subscribe(data => {
      this.products = data;
      //get all product available and put to shop product list
    })
    this.gbService.getAllProductInCartByUser(this.emailUser).subscribe(data =>{
      data.forEach(p => {
        this.cartProductList.push({...p});
        //If exist product in cart
      });
    })

  }

}
