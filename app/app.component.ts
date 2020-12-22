import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { GioielleriaBuonaiutoService } from './gioielleria-buonaiuto.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  })


export class AppComponent implements OnInit {

  @Output() user = new EventEmitter();

  isAuthenticated: boolean;
  name: string;

  constructor(public oktaAuth: OktaAuthService, public gbService: GioielleriaBuonaiutoService) { }

  async ngOnInit(){


    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    // Subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
    let userOkta = (await this.oktaAuth.getUser());
    this.name = userOkta.given_name;
      if(this.isAuthenticated){
        this.gbService.addUser(userOkta.preferred_username, userOkta.given_name, userOkta.family_name).subscribe();
      }
    }

}
