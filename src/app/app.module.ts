import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SearchbarComponent,
    HomeOffersComponent,
    OffercardComponent,
    FeaturesComponent,
    FeatureCardComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
