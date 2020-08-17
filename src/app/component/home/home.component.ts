import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { environment } from '../../environments/environment'
@Component ({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listNewGoods;
  img_serve = environment.img_serve;

  constructor(
    private dataService: DataService,
  ) { }
  ngOnInit(){
    this.getNewGoods();
  }
  getNewGoods(){
    this.dataService.getListNewGoods().subscribe(
      data => {
        this.listNewGoods = data['areaBannerList'];
      }
    );
    
  }
}