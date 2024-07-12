// src/app/dynamic-component.service.ts
import { Injectable, Type } from '@angular/core';
import { HourPrintComponent } from './hour-print/hour-print.component';
import { DecalsStickersComponent } from './decals-stickers/decals-stickers.component';
import { BannerPosterComponent } from './banner-poster/banner-poster.component';
import { RigidSignsComponent } from './rigid-signs/rigid-signs.component';
import { WallDecorGraphicComponent } from './wall-decor-graphic/wall-decor-graphic.component';

type ComponentMap = {
  [key: string]: Type<any>;
};

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentService {
  private components: ComponentMap = {
    '24-hour-print': HourPrintComponent,
    'decals-stickers': DecalsStickersComponent,
    'banner-poster': BannerPosterComponent,
    'rigid-signs': RigidSignsComponent,
    'wall-decor-graphic': WallDecorGraphicComponent
  };

  getComponent(componentName: string): Type<any> | undefined {
    return this.components[componentName];
  }
}
