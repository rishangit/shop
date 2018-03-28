import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopInfoMainComponent } from './shop-info-main.component';

describe('ShopInfoMainComponent', () => {
  let component: ShopInfoMainComponent;
  let fixture: ComponentFixture<ShopInfoMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopInfoMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopInfoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
