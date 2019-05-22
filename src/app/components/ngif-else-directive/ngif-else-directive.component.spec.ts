import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifElseDirectiveComponent } from './ngif-else-directive.component';

describe('NgifElseDirectiveComponent', () => {
  let component: NgifElseDirectiveComponent;
  let fixture: ComponentFixture<NgifElseDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgifElseDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgifElseDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
