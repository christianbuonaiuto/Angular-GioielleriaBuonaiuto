import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrandComponent } from './component/brand/brand.component';
import { CommonModule, DatePipe } from '@angular/common';
import { ShopComponent } from './component/shop/shop.component';
import { ShopListProductComponent } from './component/shop-list-product/shop-list-product.component';
import { ShopCartComponent } from './component/shop-cart/shop-cart.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ShopCategoriesComponent } from './component/shop-categories/shop-categories.component';
import { CartSummaryComponent } from './component/cart-summary/cart-summary.component';
import { CartSummaryNoItemsComponent } from './component/cart-summary-no-items/cart-summary-no-items.component';
import { CartSummaryWindowComponent } from './component/cart-summary-window/cart-summary-window.component';
import { CartOrderConfirmedComponent } from './component/cart-order-confirmed/cart-order-confirmed.component';
import { ShowProductComponent } from './component/show-product/show-product.component';
import { HomeWindowComponent } from './component/home-window/home-window.component';
import { WindowLoginComponent } from './component/window-login/window-login.component';
import { PersonalAreaComponent } from './component/personal-area/personal-area.component';
import { MatListModule } from '@angular/material/list';
import { PersonalAreaOrderListComponent } from './component/personal-area-order-list/personal-area-order-list.component';
import { PersonalAreaProfileComponent } from './component/personal-area-profile/personal-area-profile.component';
import { PersonalAreaProductInOrderListComponent } from './component/personal-area-product-in-order-list/personal-area-product-in-order-list.component';
import { PersonalAreaAllProductInOrderByUserComponent } from './component/personal-area-all-product-in-order-by-user/personal-area-all-product-in-order-by-user.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonalAreaAdminListProductComponent } from './component/personal-area-admin-list-product/personal-area-admin-list-product.component';
import { PersonalAreaAdminListProductEditProductComponent } from './component/personal-area-admin-list-product-edit-product/personal-area-admin-list-product-edit-product.component';
import { PersonalAreaAdminListOrderComponent } from './component/personal-area-admin-list-order/personal-area-admin-list-order.component';
import { PersonalAreaAdminAddProductComponent } from './component/personal-area-admin-add-product/personal-area-admin-add-product.component';
import { ContactComponent } from './component/contact/contact.component';
import { PersonalAreaAdminListUserComponent } from './component/personal-area-admin-list-user/personal-area-admin-list-user.component';
import { PersonalAreaAdminViewProfileComponent } from './component/personal-area-admin-view-profile/personal-area-admin-view-profile.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ShopComponent,
    ShopListProductComponent,
    ShopCartComponent,
    ShopCategoriesComponent,
    CartSummaryComponent,
    CartSummaryNoItemsComponent,
    CartSummaryWindowComponent,
    CartOrderConfirmedComponent,
    ShowProductComponent,
    HomeWindowComponent,
    WindowLoginComponent,
    PersonalAreaComponent,
    PersonalAreaOrderListComponent,
    PersonalAreaProfileComponent,
    PersonalAreaProductInOrderListComponent,
    PersonalAreaAllProductInOrderByUserComponent,
    PersonalAreaAdminListProductComponent,
    PersonalAreaAdminListProductEditProductComponent,
    PersonalAreaAdminListOrderComponent,
    PersonalAreaAdminAddProductComponent,
    ContactComponent,
    PersonalAreaAdminListUserComponent,
    PersonalAreaAdminViewProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
    MatGridListModule,
    MatListModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
