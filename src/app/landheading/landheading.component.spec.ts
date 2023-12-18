import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandheadingComponent } from './landheading.component';

describe('LandheadingComponent', () => {
  let component: LandheadingComponent;
  let fixture: ComponentFixture<LandheadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandheadingComponent]
    });
    fixture = TestBed.createComponent(LandheadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
