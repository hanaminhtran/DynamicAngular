import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourPrintComponent } from './hour-print.component';

describe('HourPrintComponent', () => {
  let component: HourPrintComponent;
  let fixture: ComponentFixture<HourPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HourPrintComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HourPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
