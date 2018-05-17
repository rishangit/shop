import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WysiwygMainComponent } from './wysiwyg-main.component';

describe('WysiwygMainComponent', () => {
  let component: WysiwygMainComponent;
  let fixture: ComponentFixture<WysiwygMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WysiwygMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WysiwygMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
