import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveHostlistenerComponent } from './directive-hostlistener.component';

describe('DirectiveHostlistenerComponent', () => {
  let component: DirectiveHostlistenerComponent;
  let fixture: ComponentFixture<DirectiveHostlistenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveHostlistenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveHostlistenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
