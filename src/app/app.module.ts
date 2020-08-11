import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './component/home/home.component';
import { GoodsDetailComponent } from './component/good-detail/good-detail.component';
import { CartComponent } from './component/cart/cart.component';
import { CategoryComponent } from './component/category/category.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { MyAccountComponent } from './component/my-account/my-account.component';
import { ForgotPwdComponent} from './component/forgot-pwd/forgot-pwd.component';
import { NumberPipe } from './number.pipe'
@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    AppRoutingModule ,
    ],
  declarations: [ 
    AppComponent, 
    CartComponent,
    CategoryComponent,
    ForgotPwdComponent,
    GoodsDetailComponent,
    HelloComponent,
    HomeComponent,
    MyAccountComponent,
    SignInComponent,
    SignUpComponent,
    NumberPipe,
   

     ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
