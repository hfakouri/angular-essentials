import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputDatabindingComponent } from './output-databinding.component';

describe('OutputDatabindingComponent', () => {
  let component: OutputDatabindingComponent;
  let fixture: ComponentFixture<OutputDatabindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputDatabindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputDatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
