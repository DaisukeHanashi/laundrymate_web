import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedheadingComponent } from './loggedheading.component';

describe('LoggedheadingComponent', () => {
  let component: LoggedheadingComponent;
  let fixture: ComponentFixture<LoggedheadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoggedheadingComponent]
    });
    fixture = TestBed.createComponent(LoggedheadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
