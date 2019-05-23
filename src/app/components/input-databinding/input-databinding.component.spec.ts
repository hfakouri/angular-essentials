import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDatabindingComponent } from './input-databinding.component';

describe('InputDatabindingComponent', () => {
  let component: InputDatabindingComponent;
  let fixture: ComponentFixture<InputDatabindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputDatabindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
