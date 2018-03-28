import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksMainComponent } from './stocks-main.component';

describe('StocksMainComponent', () => {
  let component: StocksMainComponent;
  let fixture: ComponentFixture<StocksMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocksMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
