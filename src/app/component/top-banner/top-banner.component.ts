import { Component, OnInit, AfterViewInit, HostBinding, ViewChild } from '@angular/core';
import { trigger, transition, style, animate, useAnimation } from "@angular/animations";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { AnimationType } from "../component/carousel-animation/carousel.animation";

import { environment } from '../../environments/environment';
import { DataService } from '../../data.service';
import { CarouselAnimationComponent } from "../../component/carousel-animation/carousel-animation.component";


import { Slide } from "../../component/carousel-animation/carousel.interface";

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
  styleUrls: ['./top-banner.component.scss'],
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
  get_imageSlider(){
    this.dataService.getData().subscribe(
      data => {
        this.imageObj = data['areaBannerList'][0].areaBannerList
        // }
        console.log(this.imageObj);
      }
    );
  }
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  // add animation
  @ViewChild(CarouselAnimationComponent) carousel: CarouselAnimationComponent;
  animationType = AnimationType.Fade;
  
  setAnimationType(type) {
      this.animationType = type.value;
      setTimeout(() => {
        this.carousel.onNextClick();
      });
    }
  slides: Slide[] = [
    {
      headline: "For Your Current Mood",
      src:
        "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
    },
    {
      headline: "Miouw",
      src:
        "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
    },
    {
      headline: "In The Wilderness",
      src:
        "https://images.unsplash.com/photo-1557800634-7bf3c7305596?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2001&q=80"
    },
    {
      headline: "Focus On The Writing",
      src:
        "https://images.unsplash.com/photo-1551410224-699683e15636?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
    }
  ];
  animationTypes = [
    {
      name: "Scale",
      value: AnimationType.Scale
    },
    {
      name: "Fade",
      value: AnimationType.Fade
    },
    {
      name: "Flip",
      value: AnimationType.Flip
    },
    {
      name: "Jack In The Box",
      value: AnimationType.JackInTheBox
    }
  ];
}