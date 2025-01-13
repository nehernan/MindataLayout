import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-link-icon',
  templateUrl: './btn-link-icon.component.html',
  styleUrls: ['./btn-link-icon.component.scss']
})
export class BtnLinkIconComponent {
  @Input() linkAction: string = '';
  @Input() iconImg: string = '';
  @Input() customClass: string = '';
}
