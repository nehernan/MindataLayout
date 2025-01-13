import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-ui',
  templateUrl: './card-ui.component.html',
  styleUrls: ['./card-ui.component.scss']
})
export class CardUiComponent implements OnInit {
  title: string = 'Este es un título dinámico';
  textInfo: string = 'Este texto se genera dinámicamente desde el componente CardUi.'; 
  imgBanner: string = '../../../assets/images/banners/bannerProfile02.png';
  imgBannerAlt: string = 'Ui Banner';
  linkText: string = 'Action now';
  linkAction: string = '#';

  constructor() { }

  ngOnInit(): void {
  }

}
