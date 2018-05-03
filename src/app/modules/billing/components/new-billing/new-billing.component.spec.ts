import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBillingComponent } from './new-billing.component';

describe('NewBillingComponent', () => {
  let component: NewBillingComponent;
  let fixture: ComponentFixture<NewBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
