import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandhomeComponent } from './landhome.component';

describe('LandhomeComponent', () => {
  let component: LandhomeComponent;
  let fixture: ComponentFixture<LandhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandhomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
