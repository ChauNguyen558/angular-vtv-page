import { Component, OnInit, AfterViewInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { DataService } from '../../data.service';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

//declare var $: any;
//import * as $ from 'jquery';
import $ = require('jquery');

interface imgSlider  {
  imgPath: string,
  linkUrl: string,
  bannerName: string
} 

@Component({
  selector: 'top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.css']
})
export class TopBannerComponent implements OnInit {
  imageObj;
  get_imgSlideObj;
  typeOptions = [
    {name: 'Sản phẩm mới nhất', value: "", tran: '_Newest'},
    {name: 'Sản phẩm giá thấp nhât', value: 3, tran: '_Cheapest'},
    {name: 'Sản phẩm giá cao nhât', value: 4, tran: '_Expensive'},
    {name: 'A->Z', value: -1, tran: ''},
    {name: 'Z->A', value: -2, tran: ''}
  ];
  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
   this.get_imageSlider();
  }
  ngAfterViewInit(){
   //$('#carouselExampleCaptions').carousel();
  }
  get_imageSlider(){
    this.dataService.getData().subscribe(
      data => {
        this.imageObj = data['areaBannerList'][0].areaBannerList;
        // for(var i = 0; i< this.imageObj.length; i++){
        //   //this.get_imgSlideObj.push(this.imageObj[i])
        // }
        console.log(this.imageObj);
      }
    );
  }
images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}