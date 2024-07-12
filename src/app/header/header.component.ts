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
    });
  }

  loadComponent(link: string, text: string) {

    var imageSrc = '';    
    if(text == '24 HOUR PRINT') {      
      imageSrc = 'https://2sao.vietnamnetjsc.vn/images/2021/08/03/16/05/dien-vien-phim-18-4.jpg';      
    }
    if(text == 'RIGID SIGNS') {      
      imageSrc = 'https://phapluatxahoi.kinhtedothi.vn/stores/news_dataimages/phapluatxahoi/082015/18/10/hinh-anh-moi-nhat-cua-kim-tae-hee-320170619170948.2255530.png';      
    }
    //case 'RIGID SIGNS Sub Menu 1':
    if(text == 'RIGID SIGNS Sub Menu 1') {      
      imageSrc = 'https://2sao.vietnamnetjsc.vn/images/2021/08/03/16/05/dien-vien-phim-18-5.jpg';      
    }
    //case 'RIGID SIGNS Sub Menu 2':
    if(text == 'RIGID SIGNS Sub Menu 2') {
      imageSrc = 'https://2sao.vietnamnetjsc.vn/images/2021/08/03/16/06/dien-vien-phim-18-8.jpg';      
    }

    if(text == 'DECALS - STICKERS') {      
      imageSrc = 'https://2sao.vietnamnetjsc.vn/images/2021/08/03/16/05/dien-vien-phim-18-2.jpg';      
    }
    //case 'DECALS - STICKERS Sub Menu 1':
    if(text == 'DECALS - STICKERS Sub Menu 1') {      
      imageSrc = 'https://2sao.vietnamnetjsc.vn/images/2021/08/03/16/05/dien-vien-phim-18-5.jpg';      
    }
    //case 'DECALS - STICKERS Sub Menu 2':
    if(text == 'DECALS - STICKERS Sub Menu 2') {
      imageSrc = 'https://2sao.vietnamnetjsc.vn/images/2021/08/03/16/06/dien-vien-phim-18-8.jpg';
      
    }

    if(text == 'WALL DECOR & GRAPHIC') {      
      imageSrc = 'https://kubetbz.com/wp-content/uploads/2022/08/cung-chiem-nguong-top-10-dien-vien-cap-3-5.jpg';      
    }    
    if(text == 'WALL DECOR & GRAPHIC Sub Menu 1') {      
      imageSrc = 'https://sohanews.sohacdn.com/thumb_w/480/Article/2012/09/26/11006058ha1.jpg';      
    }    
    if(text == 'WALL DECOR & GRAPHIC Sub Menu 2') {
      imageSrc = 'https://2sao.vietnamnetjsc.vn/images/2021/08/03/16/06/dien-vien-phim-18-8.jpg';      
    }
    
    if(text == 'BANNER - POSTER') {      
      imageSrc = 'https://hieucarpet.vn/wp-content/uploads/2021/05/danh-sach-top-9-dien-vien-jav-dep-nhat-o-nhat-ban.jpg';      
    }    
    if(text == 'BANNER - POSTER Sub Menu 1') {      
      imageSrc = 'https://doshopvn.com/wp-content/uploads/2021/08/dien-vien-phim-18trung-quoc-Shen-Xinyu.jpg';      
    }    
    if(text == 'BANNER - POSTER Sub Menu 2') {
      imageSrc = 'https://2sao.vietnamnetjsc.vn/images/2021/08/03/16/06/dien-vien-phim-18-8.jpg';      
    }
     
     
    const componentType = this.dynamicComponentService.getComponent(link);
    if (componentType) {
      
      this.container.clear();
      const componentRef = this.container.createComponent(componentType, { environmentInjector: this.injector });
      componentRef.instance.setImage(imageSrc);
      if (componentRef.instance && 'setImage' in componentRef.instance) {      
        componentRef.instance.setImage(imageSrc);
        componentRef.instance.setData(text);
      }
      this.selectedSubMenuText = text;
    } 
  }

  handleMenuClick(event: { link: string, name: string }) {    
    this.loadComponent(event.link, event.name);
  }
}
