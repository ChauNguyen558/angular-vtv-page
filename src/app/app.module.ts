import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './component/home/home.component';
import { GoodsDetailComponent } from './component/goods-detail/goods-detail.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    AppRoutingModule ,
    ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    HomeComponent,
    GoodsDetailComponent

     ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
