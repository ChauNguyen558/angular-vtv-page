import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './component/home/home.component';
import { GoodsDetailComponent } from './component/good-detail/good-detail.component';
import { CartComponent } from './component/cart/cart.component';
import { CategoryComponent } from './component/category/category.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { MyAccountComponent } from './component/my-account/my-account.component';
import { NumberPipe } from './number.pipe';
import { TopBannerComponent } from './component/top-banner/top-banner.component';

import { DataService } from './data.service';
import { CarouselAnimationComponent } from './component/carousel-animation/carousel-animation.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    AppRoutingModule ,
    NgbModule,
    BrowserAnimationsModule
    ],
  declarations: [ 
    AppComponent, 
    CartComponent,
    CategoryComponent,
    GoodsDetailComponent,
    HelloComponent,
    HomeComponent,
    MyAccountComponent,
    SignInComponent,
    SignUpComponent,
    NumberPipe,
    TopBannerComponent,
    CarouselAnimationComponent,
   

     ],
  bootstrap:    [ AppComponent ],
  providers: [DataService]
})
export class AppModule { }
