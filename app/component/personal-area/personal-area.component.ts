import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { GioielleriaBuonaiutoService } from 'src/app/gioielleria-buonaiuto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.css']
})
export class PersonalAreaComponent implements OnInit {

  page: number;
  isAuthenticated: boolean;
  emailUserOkta: string;
  emailUserOktaForAdmin: string;
  idOrder: string;
  codeProduct: string;
  totalOrder:boolean;
  isAdmin: boolean;
  isLoad=false;

  constructor(public oktaAuth: OktaAuthService, private gbServce: GioielleriaBuonaiutoService, private router:Router) { }

  changePage(newPage:number){
    this.page=newPage;
  }

  goToOrder(email:string){
    this.emailUserOktaForAdmin = email;
    this.changePage(5);
    //list order by admin
  }

  goToListUser(){
    this.emailUserOktaForAdmin = null;
    this.changePage(7);
    //list user by admin
  }

  goToUser(email:string){
    this.emailUserOktaForAdmin = email;
    this.changePage(96);
    //view profile by admin
  }

  goToEditProduct(code:string){
    this.codeProduct = code;
    this.changePage(97);
    //edit product by admin
  }

  goToProduct(code:string){
    this.codeProduct = code;
    this.changePage(98);
    //show product
  }


  goToProductInOrderListByEmail(id:string){
    this.idOrder=id;
    this.totalOrder=false;
    this.changePage(99);
    //product in order list
  }

  goToProductInOrderList(id:string)
  {
    this.idOrder = id;
    this.totalOrder=true;
    this.changePage(99);
    //product in order list by admin
  }

  async ngOnInit(){
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    if(!this.isAuthenticated){
      this.router.navigateByUrl("/window-login");
    }
    this.emailUserOkta = (await this.oktaAuth.getUser()).preferred_username;
    this.gbServce.isAdmin(this.emailUserOkta).subscribe(data => {
      this.isAdmin = data;
    })
    this.isLoad=true;
  }

}
