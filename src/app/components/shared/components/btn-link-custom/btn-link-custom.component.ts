import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-link-custom',
  templateUrl: './btn-link-custom.component.html',
  styleUrls: ['./btn-link-custom.component.scss']
})
export class BtnLinkCustomComponent{
  @Input() linkText: string = '';
  @Input() linkAction: string = '';
}
