import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecalsStickersComponent } from './decals-stickers.component';

describe('DecalsStickersComponent', () => {
  let component: DecalsStickersComponent;
  let fixture: ComponentFixture<DecalsStickersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecalsStickersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DecalsStickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
