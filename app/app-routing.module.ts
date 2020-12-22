import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandComponent } from './component/brand/brand.component';
import { ShopComponent } from './component/shop/shop.component';
import { CartSummaryComponent } from './component/cart-summary/cart-summary.component';
import { CartSummaryNoItemsComponent } from './component/cart-summary-no-items/cart-summary-no-items.component';
import { ShowProductComponent } from './component/show-product/show-product.component';
import { HomeWindowComponent } from './component/home-window/home-window.component';
import { OKTA_CONFIG, OktaAuthModule,OktaCallbackComponent  } from '@okta/okta-angular';
import { AuthInterceptor } from './component/shared/okta/auth.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonModule} from '@angular/common';
import { PersonalAreaComponent } from './component/personal-area/personal-area.component';
import { ContactComponent } from './component/contact/contact.component';
import { WindowLoginComponent } from './component/window-login/window-login.component';


const oktaConfig = {
  issuer: 'https://dev-766238.okta.com/oauth2/default',
  redirectUri: window.location.origin + '/implicit/callback/',
  clientId: '0oak5tc0kexxPJJdI4x6',
  scopes: ['openid', 'profile']
};

const routes: Routes = [
  { path: '', redirectTo:'/home-window', pathMatch:'full' },
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  },
  { path: 'brand', component: BrandComponent, },
  { path: 'home-window', component: HomeWindowComponent},
  { path: 'shop', component: ShopComponent},
  { path: 'cart-summary', component: CartSummaryComponent},
  { path: 'cart-summary-no-items', component: CartSummaryNoItemsComponent },
  { path: 'show-product', component: ShowProductComponent},
  { path: 'personal-area', component: PersonalAreaComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'window-login', component: WindowLoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    OktaAuthModule
  ],
  providers: [
    {provide: OKTA_CONFIG, useValue: oktaConfig},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
