// src/app/header/header.component.ts
import { Component, OnInit, ViewChild, ViewContainerRef, EnvironmentInjector } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DynamicComponentService } from '../dynamic-component.service';
import { SubMenuItemComponent } from '../sub-menu-item/sub-menu-item.component';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule, SubMenuItemComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuItems: MenuItem[] = [];
  selectedSubMenuText: string | null = null;
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(
    private http: HttpClient,
    private dynamicComponentService: DynamicComponentService,
    private injector: EnvironmentInjector
  ) {}

  ngOnInit(): void {
    this.http.get<MenuItem[]>('assets/menu.json').subscribe(data => {
      this.menuItems = data;
      //console.log(this.menuItems);
    });
  }

  loadComponent(link: string, text: string) {

    var imageSrc = ''; 
    const componentType = this.dynamicComponentService.getComponent(link);
    this.container.clear();
    if (componentType) {  
      this.container.clear();
      const componentRef = this.container.createComponent(componentType, { environmentInjector: this.injector });
    switch (text) {
      case '24 HOUR PRINT':
        componentRef.instance.getProductsByCategory('24 HOUR PRINT', '');
        break;
      case 'ALL 24HR PRODUCTS':
        componentRef.instance.getProductsByCategory('24 HOUR PRINT', 'ALL 24HR PRODUCTS');
        break;
      case 'ALL 48HR PRODUCTS':
          componentRef.instance.getProductsByCategory('24 HOUR PRINT', 'ALL 48HR PRODUCTS');
          break;
      case 'DECALS - STICKERS':
       componentRef.instance.getProductsByCategory('DECALS - STICKERS', '');
        break;
      case 'COMMON DECAL':
        componentRef.instance.getProductsByCategory('DECALS - STICKERS', 'COMMON DECAL');
        break;
      case 'BANNER & POSTER':
        componentRef.instance.getProductsByCategory('BANNER & POSTER', '');
        break;
      case 'ALL BANNER PRODUCTS':
          componentRef.instance.getProductsByCategory('BANNER & POSTER', 'ALL BANNER PRODUCTS');
          break;
     
    }
  }
    
  }

  handleMenuClick(event: { link: string, name: string }) {    
    this.loadComponent(event.link, event.name);
  }
}
