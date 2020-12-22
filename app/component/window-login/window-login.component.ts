import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { GioielleriaBuonaiutoService } from 'src/app/gioielleria-buonaiuto.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-window-login',
  templateUrl: './window-login.component.html',
  styleUrls: ['./window-login.component.css']
})
export class WindowLoginComponent implements OnInit {

  isAuthenticated: boolean;

  constructor(public oktaAuth: OktaAuthService, public gbService: GioielleriaBuonaiutoService, private ngxService: NgxUiLoaderService) { }

  async ngOnInit(){
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    // Subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
    let userOkta = (await this.oktaAuth.getUser());
      if(this.isAuthenticated){
        this.gbService.addUser(userOkta.preferred_username, userOkta.given_name, userOkta.family_name).subscribe();
      }
  }


}
