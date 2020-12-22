import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './class/user';
import { ProductInCart } from './class/product-in-cart';
import { Product } from './class/product';
import { Order } from './class/order';
import { ProductInOrder } from './class/product-in-order';

@Injectable({
  providedIn: 'root'
})
export class GioielleriaBuonaiutoService {

  public address = "//localhost:8080";


  constructor(private http: HttpClient) {
  }

  /*******************************
   * USER
   ******************************/

  getAllUsers(): Observable<any>{
    return this.http.get(this.address + "/user/list");
  }

  getUser(emailUser: string): Observable<any>{
    const paramz = new HttpParams().set('emailUser', emailUser);
    return this.http.get(this.address + "/user/getOne" , {params: paramz} );
  }

  addUser(email:string, name:string, surname:string): Observable<any>{
    let user = new User();
      user.email = email;
      user.firstname = name;
      user.surname = surname;
      user.admin = false;
    return this.http.post(this.address + "/user/add" , user)
  }

  isAdmin(emailUser: string):Observable<any>{
    const paramz = new HttpParams().set('emailUser', emailUser);
    return this.http.get(this.address + "/user/isAdmin", {params: paramz} );
  }

  editPhoneAddressPostalCode(user:User):Observable<any>{
    return this.http.put(this.address + "/user/editPAP", user );
  }

  editRole(user:User):Observable<any>{
    return this.http.put(this.address + "/user/changeRole", user);
  }
   /*******************************
   * PRODUCT
   ******************************/

   addProduct(product:Product):Observable<any>{
     product.lastModify = null;
     return this.http.post(this.address + "/product/add", product);
   }

   getAllNameBrands():Observable<any>{
     return this.http.get(this.address + "/product/listNameBrands");
   }

   getByBrand(brand: string): Observable<any>{
    const paramz = new HttpParams().set('brand', brand);
    return this.http.get(this.address + "/product/findByBrand", {params: paramz} );
  }

  getNameAllBrandImg(): Observable<any>{
    return this.http.get(this.address + "/product/listNameBrandImg");
  }
  getProduct(codeProduct: string): Observable<any>{
    const paramz = new HttpParams().set('codeProduct', codeProduct);
    return this.http.get(this.address + "/product/getOne", {params: paramz} );
  }

  getAllProductsAvailable(): Observable<any>{
    return this.http.get(this.address + "/product/listAvailable");
  }

  getAllProducts(): Observable<any>{
    return this.http.get(this.address + "/product/list");
  }

  getAllProductsOrderByPriceIncr(): Observable<any>{
    return this.http.get(this.address + "/product/listOrderByPriceIncr");
  }

  getAllProductsOrderByPriceDecr(): Observable<any>{
    return this.http.get(this.address + "/product/listOrderByPriceDecr");
  }

  editDescriptionQuantityPriceProduct(product:Product): Observable<any>{
    return this.http.put(this.address +"/product/editDQP", product);
  }

  editQuantityProduct(product:Product , newQty:number): Observable<any>{
    product.quantity = newQty;
    return this.http.put(this.address +"/product/editQuantity", product);
  }

  getAllCategories(): Observable<any>{
    return this.http.get(this.address + "/product/allCategories" );
  }

  getByCategory(category: string): Observable<any>{
    const paramz = new HttpParams().set('category', category);
    return this.http.get(this.address + "/product/findByCategory", {params: paramz} );
  }
   /*******************************
   * PRODUCTINCART
   ******************************/
  getAllProductInCartByUser(emailUser: string): Observable<any>{
    const paramz = new HttpParams().set('emailUser', emailUser);
    return this.http.get(this.address + "/productInCart/listByUser", {params: paramz});
  }

  deleteProductInCart(ido: number): Observable<any>{
    return this.http.delete(this.address + "/productInCart/deleteOne/" + ido);
  }



  addProductInCart(email:string, product:Product, quantity:number): Observable<any>{
    let productInCart = new ProductInCart();
    let usero = new User();
    usero.email = email;
    productInCart.usero = usero;
    productInCart.product=product;
    productInCart.quantity=quantity;
    return this.http.post(this.address +"/productInCart/add", productInCart);
  }

  editProductInCartQuantity(ido:number , qty:number): Observable<any>{
    let productInCart = new ProductInCart();
    productInCart.ido = ido;
    productInCart.quantity= qty;
    return this.http.put(this.address +"/productInCart/editQty", productInCart);
  }

  deleteAllProductInCartByUser(emailUser:string): Observable<any>{
    const paramz = new HttpParams().set('emailUser', emailUser);
    return this.http.delete(this.address + "/productInCart/deleteListByUser", {params: paramz} );
  }

  /*******************************
   * PRODUCTINORDER
   ******************************/


  addProductInOrder(ordero:Order, product:Product, quantity:number, price:number): Observable<any>{
    let productInOrder = new ProductInOrder();
    productInOrder.ordero = ordero;
    productInOrder.product = product;
    productInOrder.quantity = quantity;
    productInOrder.price = price;
    console.log(productInOrder);
    this.editQuantityProduct(product ,(product.quantity - quantity)).subscribe();
    return this.http.post(this.address + "/productInOrder/add" , productInOrder);
  }

  getAllProductInOrderByOrder(orderIdo :string): Observable<any>{
    const paramz = new HttpParams().set('orderIdo', orderIdo);
    return this.http.get(this.address + "/productInOrder/listByOrder", {params: paramz} );
  }

  getAllProductInOrderByEmail(emailUser :string): Observable<any>{
    const paramz = new HttpParams().set('emailUser', emailUser);
    return this.http.get(this.address + "/productInOrder/listByUser", {params: paramz} );
  }

   /*******************************
   * ORDER
   ******************************/

  addOrder(idOrder:string ,emailUser: string, date:Date, amount:number, comment:string): Observable<any>{
    let order = new Order();
    order.ido = idOrder
    let user = new User();
    user.email = emailUser;
    order.usero = user;
    order.datePurchase = date;
    order.amount = amount;
    order.comment = comment;
    return this.http.post(this.address + "/order/add" , order);
  }


  getOrdersByEmail(emailUser: string):Observable<any>{
    const paramz = new HttpParams().set('emailUser', emailUser);
    return this.http.get(this.address + "/order/listByUser", {params: paramz} );
  }

  getAllOrders():Observable<any>{
    return this.http.get(this.address + "/order/list");
  }


  ////////////////////////////////








}
