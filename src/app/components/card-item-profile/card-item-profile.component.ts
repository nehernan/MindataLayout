import { Component, OnInit } from '@angular/core';
import { UserProps } from './user.interface';

@Component({
  selector: 'app-card-item-profile',
  templateUrl: './card-item-profile.component.html',
  styleUrls: ['./card-item-profile.component.scss'],
})
export class CardItemProfileComponent implements OnInit {
  user: UserProps = {
    userName: 'John Doe',
    userProfession: 'Dog Trainer',
    linkProfil: '',
    /* imgBanner: '../../../assets/images/banners/bannerProfile01.png',
    imgBannerAlt:'Strawberry Cake', */
    userImage: '../../../assets/images/users/imgProfile07.png',
    userLinkHistory: '/',
  };

  ngOnInit(): void {}
}
