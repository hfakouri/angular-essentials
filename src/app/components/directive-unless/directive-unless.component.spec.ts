import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveUnlessComponent } from './directive-unless.component';

describe('DirectiveUnlessComponent', () => {
  let component: DirectiveUnlessComponent;
  let fixture: ComponentFixture<DirectiveUnlessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveUnlessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveUnlessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
