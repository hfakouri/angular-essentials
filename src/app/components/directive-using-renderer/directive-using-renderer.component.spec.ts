import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveUsingRendererComponent } from './directive-using-renderer.component';

describe('DirectiveUsingRendererComponent', () => {
  let component: DirectiveUsingRendererComponent;
  let fixture: ComponentFixture<DirectiveUsingRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveUsingRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveUsingRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
