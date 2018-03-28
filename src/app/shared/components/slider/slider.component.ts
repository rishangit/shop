import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Slider } from '../../../shared/classes/project';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @ViewChild('dynamicInsert', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef;
  Component: any;
  constructor(
    public projectService: ProjectService,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {
    this.projectService.subscriptionSlider = this.projectService.eventSliderCallback$.subscribe(obj => {
      this.drowSlider(obj)
      this.projectService.sliderShow = true;
    })

  }

  ngOnInit() {
  }

  eventSliderClose() {
    this.projectService.sliderShow = false;
  }

  drowSlider(slider: Slider) {
    if (this.Component) this.Component.destroy();
    var comp = this.componentFactoryResolver.resolveComponentFactory(slider.component);
    this.Component = this.viewContainerRef.createComponent(comp);
  }
}
