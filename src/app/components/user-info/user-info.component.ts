import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {
  @Input() customClass: string = '';
  @Input() userName: string = '';
  @Input() userProfession: string = '';
  @Input() userImage: string = '';
  @Input() userLinkHistory?: string = '';
  userLinkHistoryActive?: boolean = false;

  defaultIcon: string = '../../../assets/images/users/defaultProfile.png';

  constructor() { }

  ngOnInit(): void {
    if (!this.userImage) {
      this.userImage = this.defaultIcon;
    }

    // Activamos o desactivamos userLinkHistoryActive según la existencia de userLinkHistory
    this.userLinkHistoryActive = !!this.userLinkHistory;
  }
}
