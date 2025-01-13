import { Component, OnInit } from '@angular/core';
import { FoodProps } from './food.interface'; 

@Component({
  selector: 'app-card-food',
  templateUrl: './card-food.component.html',
  styleUrls: ['./card-food.component.scss']
})
export class CardFoodComponent implements OnInit {
  food: FoodProps = {
    title: 'Strawberry Cake',
    textCard: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s,',
    imgBanner: '../../../assets/images/banners/bannerProfile01.png',
    imgBannerAlt:'Strawberry Cake',
    foodLink:'/ruta',
    foodLinkText:'ORDER NOW',
    priceNow: 13.18,
    priceBefore: 18.90,
  };

 
  priceNowFormatted: string = '';
  priceBeforeFormatted: string = ''; 

  constructor() { }

  ngOnInit(): void {
    this.priceNowFormatted = this.food.priceNow.toFixed(2); 
    this.priceBeforeFormatted = this.food.priceBefore.toFixed(2);
  }

}
