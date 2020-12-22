import { Component, OnInit } from '@angular/core';
import { GioielleriaBuonaiutoService } from 'src/app/gioielleria-buonaiuto.service';
import { OktaAuthService } from '@okta/okta-angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands: Array<string>;
  isAuthenticated: boolean;

  constructor(private gbService: GioielleriaBuonaiutoService,public oktaAuth: OktaAuthService, private router:Router) { }

  async ngOnInit(){
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    if(!this.isAuthenticated){
      this.router.navigateByUrl("/window-login");
    }
    this.gbService.getNameAllBrandImg().subscribe( data => {
      this.brands=data;
    });
  }
}
