import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../../components/header/header.component';
import { SubHeaderComponent } from '../../components/sub-header/sub-header.component';
import { SliderComponent } from '../../components/slider/slider.component';
//service
//import { ProjectService } from '../../services/project.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    SubHeaderComponent,
    SliderComponent
  ],
  exports: [
    HeaderComponent,
    SubHeaderComponent,
    SliderComponent
  ],
  providers: []
})
export class SharedCommonModule { }
