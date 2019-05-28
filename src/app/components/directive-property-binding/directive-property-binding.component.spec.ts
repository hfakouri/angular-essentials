import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivePropertyBindingComponent } from './directive-property-binding.component';

describe('DirectivePropertyBindingComponent', () => {
  let component: DirectivePropertyBindingComponent;
  let fixture: ComponentFixture<DirectivePropertyBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivePropertyBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivePropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
