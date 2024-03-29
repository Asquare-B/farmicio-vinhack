import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import  {NgxPaginationModule } from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './myComponents/homepage/homepage.component';
import { HeaderComponent } from './myComponents/header/header.component';
import { FooterComponent } from './myComponents/footer/footer.component';
import { NavbarComponent } from './myComponents/navbar/navbar.component';
import { SearchbarComponent } from './myComponents/searchbar/searchbar.component';
import { HomeOffersComponent } from './myComponents/home-offers/home-offers.component';
import { OffercardComponent } from './myComponents/offercard/offercard.component';
import { FeaturesComponent } from './myComponents/features/features.component';
import { FeatureCardComponent } from './myComponents/feature-card/feature-card.component';
import { ShopComponent } from './myComponents/shop/shop.component';
import { ShopMainComponent } from './myComponents/shop-main/shop-main.component';
import { ShopCardComponent } from './myComponents/shop-card/shop-card.component';
import { ShopHeadComponent } from './myComponents/shop-head/shop-head.component';
import { ShopProductComponent } from './myComponents/shop-product/shop-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './myComponents/cart/cart.component';
import { CartItemComponent } from './myComponents/cart-item/cart-item.component';
import { PdhomeComponent } from './myComponents/pdhome/pdhome.component';
import { PdOfferComponent } from './myComponents/pd-offer/pd-offer.component';
import { PdHeaderComponent } from './myComponents/pd-header/pd-header.component';

import { PdSidebarComponent } from './myComponents/pd-sidebar/pd-sidebar.component';
import { PdReviewsComponent } from './myComponents/pd-reviews/pd-reviews.component';
import { PdItemcardComponent } from './myComponents/pd-itemcard/pd-itemcard.component';
import { PdDetailsComponent } from './myComponents/pd-details/pd-details.component';
import { PdSideofferComponent } from './myComponents/pd-sideoffer/pd-sideoffer.component';
import { CartSummComponent } from './myComponents/cart-summ/cart-summ.component';
import { ResuktComponent } from './myComponents/resukt/resukt.component';
import { ResultComponent } from './myComponents/result/result.component';
import { CartItemcardComponent } from './myComponents/cart-itemcard/cart-itemcard.component';
import { CartTotalComponent } from './myComponents/cart-total/cart-total.component';
import { CartAddonsComponent } from './myComponents/cart-addons/cart-addons.component';
import { CartPremiumComponent } from './myComponents/cart-premium/cart-premium.component';
import { CategoriesComponent } from './myComponents/categories/categories.component';
import { MembercardComponent } from './myComponents/membercard/membercard.component';
import { TopbrandsComponent } from './myComponents/topbrands/topbrands.component';
import { CategorycardComponent } from './myComponents/categorycard/categorycard.component';
import { FaqComponent } from './myComponents/faq/faq.component';
import { TopsellComponent } from './myComponents/topsell/topsell.component';
import { CartConfirmComponent } from './myComponents/cart-confirm/cart-confirm.component';
import { CartConfirmHeadComponent } from './myComponents/cart-confirm-head/cart-confirm-head.component';
import { CartConfirmItemComponent } from './myComponents/cart-confirm-item/cart-confirm-item.component';
import { CartConfirmDetailsComponent } from './myComponents/cart-confirm-details/cart-confirm-details.component';
import { RouterModule } from '@angular/router';
import { UserLoginComponent } from './myComponents/user-login/user-login.component';
import { UserSignupComponent } from './myComponents/user-signup/user-signup.component';
import { FarmerLoginComponent } from './myComponents/farmer-login/farmer-login.component';
import { FarmerSignupComponent } from './myComponents/farmer-signup/farmer-signup.component';
import { FarmerRequesthomeComponent } from './myComponents/farmer-requesthome/farmer-requesthome.component';
import { FarmerRequesthomeItemComponent } from './myComponents/farmer-requesthome-item/farmer-requesthome-item.component';
import { FarmershomeComponent } from './myComponents/farmershome/farmershome.component';
import { FarmerUpdateComponent } from './myComponents/farmer-update/farmer-update.component';
import { FarmerUpdateitemComponent } from './myComponents/farmer-updateitem/farmer-updateitem.component';
import { AboutusComponent } from './myComponents/aboutus/aboutus.component';
import { ContactcardComponent } from './myComponents/contactcard/contactcard.component';
import { ContacthomeComponent } from './myComponents/contacthome/contacthome.component';
import { OrdersHomeComponent } from './myComponents/orders-home/orders-home.component';
import { OrdersItemComponent } from './myComponents/orders-item/orders-item.component';
import { OrdersItemcardComponent } from './myComponents/orders-itemcard/orders-itemcard.component';
import { Contactcard2Component } from './myComponents/contactcard2/contactcard2.component';
import { FormhomeComponent } from './mini/formhome/formhome.component';
import { FormcardComponent } from './mini/formcard/formcard.component';
import { ContactushomeComponent } from './mini/contactushome/contactushome.component';
import { ChathomeComponent } from './mini/chathome/chathome.component';
import { Aboutus1Component } from './mini/aboutus/aboutus.component';
import { Navbar1Component } from './mini/navbar/navbar.component';
import { LoginComponent } from './mini/login/login.component';
import { Homepage1Component } from './mini/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    Homepage1Component,
    Navbar1Component,
    Aboutus1Component,
    HomepageComponent,
    ShopHeadComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SearchbarComponent,
    HomeOffersComponent,
    OffercardComponent,
    FeaturesComponent,
    FeatureCardComponent,
    ShopComponent,
    ShopMainComponent,
    ShopCardComponent,
    ShopProductComponent,
    CartComponent,
    CartItemComponent,
    PdhomeComponent,
    PdOfferComponent,
    PdHeaderComponent,
    PdSidebarComponent,
    PdReviewsComponent,
    PdItemcardComponent,
    PdDetailsComponent,
    PdSideofferComponent,
    CartSummComponent,
    ResuktComponent,
    ResultComponent,
    CartItemcardComponent,
    CartTotalComponent,
    CartAddonsComponent,
    CartPremiumComponent,
    CategoriesComponent,
    MembercardComponent,
    TopbrandsComponent,
    CategorycardComponent,
    FaqComponent,
    TopsellComponent,
    CartConfirmComponent,
    CartConfirmHeadComponent,
    CartConfirmItemComponent,
    CartConfirmDetailsComponent,
    UserLoginComponent,
    UserSignupComponent,
    FarmerLoginComponent,
    FarmerSignupComponent,
    FarmerRequesthomeComponent,
    FarmerRequesthomeItemComponent,
    FarmershomeComponent,
    FarmerUpdateComponent,
    FarmerUpdateitemComponent,
    AboutusComponent,
    ContactcardComponent,
    ContacthomeComponent,
    OrdersHomeComponent,
    OrdersItemComponent,
    OrdersItemcardComponent,
    Contactcard2Component,
    FormhomeComponent,
    FormcardComponent,
    ContactushomeComponent,
    ChathomeComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
