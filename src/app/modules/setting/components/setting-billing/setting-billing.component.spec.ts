import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingBillingComponent } from './setting-billing.component';

describe('SettingBillingComponent', () => {
  let component: SettingBillingComponent;
  let fixture: ComponentFixture<SettingBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingBillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
