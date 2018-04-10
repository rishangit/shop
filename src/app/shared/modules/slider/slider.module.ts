import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderMainComponent } from './components/slider-main/slider-main.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SliderMainComponent],
  exports:[SliderMainComponent]
})
export class SliderModule { }
