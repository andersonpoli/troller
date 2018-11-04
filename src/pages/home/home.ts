import { Component, ViewChild   } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('mySlider') mySlider: any;

  timerId;

  slides =  [
             {
               "img": "assets/imgs/tablet-troller-bombeiro-capa.jpg",
             },
             {
               "img": "assets/imgs/tablet-troller-bombeiro-1.jpg",
             },
             {
               "img": "assets/imgs/tablet-troller-bombeiro-2.jpg",
             },
             {
               "img": "assets/imgs/tablet-troller-bombeiro-3.jpg",
             },
             {
               "img": "assets/imgs/tablet-troller-bombeiro-4.jpg",
             }
           ]

    constructor(){
    }

    slideNext(){
       this.mySlider.slideNext();
    }

    slidePrev(){
      this.mySlider.slidePrev();
    }

    goToStart(){
       this.mySlider.slideTo(1);
    }

    slideChanged(){
      if(this.timerId){
        clearTimeout(this.timerId);
      }
      this.timerId = setInterval(() => {
        this.goToStart()
      }, 5000);
    }
   
 }