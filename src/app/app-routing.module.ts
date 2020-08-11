import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { GoodsDetailComponent } from './component/goods-detail/goods-detail.component';
const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', component: HomeComponent},
      { path: 'page', component: HomeComponent}
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