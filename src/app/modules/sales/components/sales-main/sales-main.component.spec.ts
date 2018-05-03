import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesMainComponent } from './sales-main.component';

describe('SalesMainComponent', () => {
  let component: SalesMainComponent;
  let fixture: ComponentFixture<SalesMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
