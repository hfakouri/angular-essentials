import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogingComponentComponent } from './loging-component.component';

describe('LogingComponentComponent', () => {
  let component: LogingComponentComponent;
  let fixture: ComponentFixture<LogingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogingComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
