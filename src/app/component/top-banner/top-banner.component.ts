import { Component, OnInit, AfterViewInit, HostBinding, ViewChild } from '@angular/core';
import { trigger, transition, style, animate, useAnimation } from "@angular/animations";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { AnimationType } from "../component/carousel-animation/carousel.animation";

import { environment } from '../../environments/environment';
import { DataService } from '../../data.service';
import { CarouselAnimationComponent } from "../../component/carousel-animation/carousel-animation.component";

import {
  AnimationType,
  scaleIn,
  scaleOut,
  fadeIn,
  fadeOut,
  flipIn,
  flipOut,
  jackIn,
  jackOut
} from "../../component/carousel-animation/carousel.animation";

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
  styleUrls: ['./top-banner.component.css'],
  animations: [
    trigger("slideAnimation", [
      /* scale */
      transition("void => scale", [
        useAnimation(scaleIn, { params: { time: "500ms" } })
      ]),
      transition("scale => void", [
        useAnimation(scaleOut, { params: { time: "500ms" } })
      ]),

      /* fade */
      transition("void => fade", [
        useAnimation(fadeIn, { params: { time: "500ms" } })
      ]),
      transition("fade => void", [
        useAnimation(fadeOut, { params: { time: "500ms" } })
      ]),

      /* flip */
      transition("void => flip", [
        useAnimation(flipIn, { params: { time: "500ms" } })
      ]),
      transition("flip => void", [
        useAnimation(flipOut, { params: { time: "500ms" } })
      ]),

      /* JackInTheBox */
      transition("void => jackInTheBox", [
        useAnimation(jackIn, { params: { time: "700ms" } })
      ]),
      transition("jackInTheBox => void", [
        useAnimation(jackOut, { params: { time: "700ms" } })
      ])
    ])
  ]
})
export class TopBannerComponent implements OnInit {
  @ViewChild(CarouselAnimationComponent) carousel: CarouselAnimationComponent;
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
  // ngAfterViewInit(){
  //  $('#carouselExampleCaptions').carousel();
  // }
  animationType = AnimationType.Fade;
  get_imageSlider(){
    this.dataService.getData().subscribe(
      data => {
        this.imageObj = data['areaBannerList'][0].areaBannerList
        // }
        console.log(this.imageObj);
      }
    );
  }
  setAnimationType(type) {
      this.animationType = type.value;
      setTimeout(() => {
        this.carousel.onNextClick();
      });
    }
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}