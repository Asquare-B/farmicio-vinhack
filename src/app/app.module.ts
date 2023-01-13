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


@NgModule({
  declarations: [
    AppComponent,
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
