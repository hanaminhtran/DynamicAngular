import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallDecorGraphicComponent } from './wall-decor-graphic.component';

describe('WallDecorGraphicComponent', () => {
  let component: WallDecorGraphicComponent;
  let fixture: ComponentFixture<WallDecorGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WallDecorGraphicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WallDecorGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
