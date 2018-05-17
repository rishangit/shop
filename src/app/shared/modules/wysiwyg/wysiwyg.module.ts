import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WysiwygMainComponent } from './components/wysiwyg-main/wysiwyg-main.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WysiwygMainComponent],
  exports:[WysiwygMainComponent]
})
export class WysiwygModule { }