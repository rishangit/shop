import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormElementType, FormText } from '../../classes/form-element';
@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  @Input() fromElement: FormText;
  @Input() object: any;
  @Output('changeElementEvent')
  changeElementEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    console.log(this.fromElement)
    if (this.fromElement.object != undefined) {
      this.object = this.fromElement.object;
    }
  }

  eventText_change($event) {
    this.changeElementEvent.emit({ 'prop': this.fromElement, 'sValue': $event });
  }
}
