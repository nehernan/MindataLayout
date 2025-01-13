// svg-icon.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { SvgIconService } from 'src/app/services/svg-icons.services';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss'],
})
export class SvgIconComponent implements OnInit {
  @Input() iconName: string = '';
  @Input() size: string = '24'; // Tamaño por defecto
  @Input() color: string = 'black'; // Color por defecto

  iconPath: string | undefined;

  constructor(private svgIconService: SvgIconService) {}

  ngOnInit(): void {
    this.iconPath = this.svgIconService.getIconPath(this.iconName);
    console.log('iconPath:', this.iconPath);
  }
}
