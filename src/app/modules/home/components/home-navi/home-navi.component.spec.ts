import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNaviComponent } from './home-navi.component';

describe('HomeNaviComponent', () => {
  let component: HomeNaviComponent;
  let fixture: ComponentFixture<HomeNaviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNaviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
