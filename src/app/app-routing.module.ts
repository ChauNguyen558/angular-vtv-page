import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CartComponent } from './component/cart/cart.component';
import { CategoryComponent } from './component/category/category.component';
import { ForgotPwdComponent} from './component/forgot-pwd/forgot-pwd.component'
import { GoodsDetailComponent } from './component/good-detail/good-detail.component';
import { HomeComponent } from './component/home/home.component';
import { MyAccountComponent } from './component/my-account/my-account.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: HomeComponent},
      { path: 'page', component: HomeComponent},
      { path: ':goodsName', component: GoodsDetailComponent},
      { path: ':subCategory/:categoryName', component: CategoryComponent},
      { path: 'checkout/cart', component: CartComponent},
      { path: 'customer/account/my-account', component: MyAccountComponent},
      { path: 'customer/account/login', component: SignInComponent},
      { path: 'customer/account/register', component: SignUpComponent},
      { path: 'customer/forgot-pwd', component: ForgotPwdComponent},
    ]
  }
]
@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule  
  ]
})
export class AppRoutingModule{

}