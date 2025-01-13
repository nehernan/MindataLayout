import { Component } from '@angular/core';
import { SvgIconService } from './services/svg-icons.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MindataLayout';

  constructor(private svgIconService: SvgIconService) {
    // Registrar íconos en el servicio
    this.svgIconService.registerIcon('fire-solid', '/src/assets/images/icons/fire-solid.svg');
    this.svgIconService.registerIcon('icLeaf', '/src/assets/images/icons/leaf-solid.svg');
  }
}
