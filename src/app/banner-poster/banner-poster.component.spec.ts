import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPosterComponent } from './banner-poster.component';

describe('BannerPosterComponent', () => {
  let component: BannerPosterComponent;
  let fixture: ComponentFixture<BannerPosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerPosterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
