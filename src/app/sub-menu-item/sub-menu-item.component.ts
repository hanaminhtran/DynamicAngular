// src/app/sub-menu-item/sub-menu-item.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-sub-menu-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sub-menu-item.component.html',
  styleUrls: ['./sub-menu-item.component.css']
})
export class SubMenuItemComponent {
  @Input() item!: MenuItem;
  @Output() menuClick = new EventEmitter<{link: string, name: string}>();

  onClick() {
    this.menuClick.emit({link: this.item.link, name: this.item.name});
  }
}
