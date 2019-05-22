import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgstyleDirectiveComponent } from './ngstyle-directive.component';

describe('NgstyleDirectiveComponent', () => {
  let component: NgstyleDirectiveComponent;
  let fixture: ComponentFixture<NgstyleDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgstyleDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgstyleDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
