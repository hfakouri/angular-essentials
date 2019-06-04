import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundamentalsRoutingComponent } from './fundamentals-routing.component';

describe('FundamentalsRoutingComponent', () => {
  let component: FundamentalsRoutingComponent;
  let fixture: ComponentFixture<FundamentalsRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundamentalsRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundamentalsRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
