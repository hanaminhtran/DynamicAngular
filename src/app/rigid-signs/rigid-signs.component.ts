import { Component } from '@angular/core';

@Component({
  selector: 'app-rigid-signs',
  standalone: true,
  imports: [],
  templateUrl: './rigid-signs.component.html',
  styleUrl: './rigid-signs.component.css'
})
export class RigidSignsComponent {
  imageSrc: string = '';
  data : string = 'Rigid Signs Component';  

  setImage(newSrc: string) {
    this.imageSrc = newSrc;
  }
  setData(newSrc: string) {
    this.data = newSrc;
  }

}
