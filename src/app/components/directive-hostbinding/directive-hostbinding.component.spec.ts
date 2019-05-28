import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveHostbindingComponent } from './directive-hostbinding.component';

describe('DirectiveHostbindingComponent', () => {
  let component: DirectiveHostbindingComponent;
  let fixture: ComponentFixture<DirectiveHostbindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveHostbindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveHostbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
