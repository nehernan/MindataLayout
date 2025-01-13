import { Component, OnInit } from '@angular/core';

interface User {
  userImage?: string;
  userName: string;
  userProfession: string;
  linkProfil: string;
  userLinkHistory?: string;
} 

@Component({
  selector: 'app-card-list-user',
  templateUrl: './card-list-user.component.html',
  styleUrls: ['./card-list-user.component.scss']
})
export class CardListUserComponent implements OnInit {

  users: User [] = [
    { userName: 'John Doe',  userProfession: 'Dog Trainer',      linkProfil: '', userImage: '../../../assets/images/users/imgProfile05.png',},
    { userName: 'John Tree', userProfession: 'Personal Trainer', linkProfil: '', userImage: '../../../assets/images/users/imgProfile04.png',},
    { userName: 'John Doe',  userProfession: 'Chef',             linkProfil: '', userImage: '../../../assets/images/users/imgProfile03.png',},
    { userName: 'Ming Joung', userProfession: 'Graphic Designer',linkProfil: '', userImage: '../../../assets/images/users/imgProfile02.png',},   
    { userName: 'John Four', userProfession: 'Fit Trainer',      linkProfil: '',},   
    { userName: 'John Four', userProfession: 'Fit Trainer',      linkProfil: '',},   
    { userName: 'John Doe',  userProfession: 'Chef',             linkProfil: '', userImage: '../../../assets/images/users/imgProfile03.png',},
    { userName: 'John Doe',  userProfession: 'Chef',             linkProfil: '', userImage: '../../../assets/images/users/imgProfile03.png',},
    { userName: 'John Four', userProfession: 'Fit Trainer',      linkProfil: '',},   
    { userName: 'John Doe',  userProfession: 'Chef',             linkProfil: '', userImage: '../../../assets/images/users/imgProfile03.png',},
    { userName: 'John Four', userProfession: 'Fit Trainer',      linkProfil: '',},   

  ];
  
  ngOnInit(): void {
  }
  
}
