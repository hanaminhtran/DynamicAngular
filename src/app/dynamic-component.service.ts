// src/app/dynamic-component.service.ts
import { Injectable, Type } from '@angular/core';
import { HourPrintComponent } from './hour-print/hour-print.component';
import { BannerPosterComponent } from './banner-poster/banner-poster.component';
import { RigidSignsComponent } from './rigid-signs/rigid-signs.component';

type ComponentMap = {
  [key: string]: Type<any>;
};

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentService {
  private components: ComponentMap = {
    '24-hour-print': HourPrintComponent,
    'banner-poster': BannerPosterComponent,
    'rigid-signs': RigidSignsComponent
  };

  getComponent(componentName: string): Type<any> | undefined {
    return this.components[componentName];
  }
}
