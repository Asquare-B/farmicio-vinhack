import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './myComponents/aboutus/aboutus.component';
import { CartConfirmComponent } from './myComponents/cart-confirm/cart-confirm.component';
import { CartComponent } from './myComponents/cart/cart.component';
import { ContacthomeComponent } from './myComponents/contacthome/contacthome.component';
import { FaqComponent } from './myComponents/faq/faq.component';
import { FarmerLoginComponent } from './myComponents/farmer-login/farmer-login.component';
import { FarmerRequesthomeComponent } from './myComponents/farmer-requesthome/farmer-requesthome.component';
import { FarmerSignupComponent } from './myComponents/farmer-signup/farmer-signup.component';
import { FarmerUpdateComponent } from './myComponents/farmer-update/farmer-update.component';
import { FarmershomeComponent } from './myComponents/farmershome/farmershome.component';
import { HomepageComponent } from './myComponents/homepage/homepage.component';
import { ShopComponent } from './myComponents/shop/shop.component';
import { UserLoginComponent } from './myComponents/user-login/user-login.component';
import { UserSignupComponent } from './myComponents/user-signup/user-signup.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomepageComponent},
  {path:'farmerhome',component:FarmershomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'shop',component:ShopComponent},
  {path:'farmershome',component:FarmershomeComponent},
  {path:'Request',component:FarmerRequesthomeComponent},
  {path:'update',component:FarmerUpdateComponent},
  {path:'cart',component:CartComponent},
  {path:'faq',component:FaqComponent},
  {path:'contact',component:ContacthomeComponent},
  {path:'userlogin',component:UserLoginComponent},
  {path:'farmerlogin',component:FarmerLoginComponent},
  {path:'farmersignup',component:FarmerSignupComponent},
  {path:'usersignup',component:UserSignupComponent},
  {path:'ordersummary',component:CartConfirmComponent},
  {path:'receive',component:FarmerRequesthomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
