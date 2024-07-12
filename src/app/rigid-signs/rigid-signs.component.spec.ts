import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigidSignsComponent } from './rigid-signs.component';

describe('RigidSignsComponent', () => {
  let component: RigidSignsComponent;
  let fixture: ComponentFixture<RigidSignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RigidSignsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RigidSignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
