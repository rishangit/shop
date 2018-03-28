import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormElementType, FormText } from '../../classes/form-element';


import { TextComponent } from '../text/text.component';

@Component({
  selector: 'app-draw-element',
  templateUrl: './draw-element.component.html',
  styleUrls: ['./draw-element.component.css']
})
export class DrawElementComponent implements OnInit {
  @Input() formElementList;
  @Input() object;
  @Output('changeElementEvent')
  formElementType = FormElementType;
  changeFormElementEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {

  }

  changeElementEvent(event) {
    let obj = {};
    this.changeFormElementEvent.emit(obj);
  }
}
