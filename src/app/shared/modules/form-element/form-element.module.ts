import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormElementType, FormText } from './classes/form-element';
import { TextComponent } from './components/text/text.component';
import { DrawElementComponent } from './components/draw-element/draw-element.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [TextComponent, DrawElementComponent],
  exports: [TextComponent, DrawElementComponent]
})
export class FormElementModule { }
