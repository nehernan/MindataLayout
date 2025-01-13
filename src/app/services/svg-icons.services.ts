import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SvgIconService {
  private iconMap = new Map<string, string>();

  registerIcon(iconName: string, iconPath: string): void {
    this.iconMap.set(iconName, iconPath);
  }

  getIconPath(iconName: string): string | undefined {
    return this.iconMap.get(iconName);
  }
}
