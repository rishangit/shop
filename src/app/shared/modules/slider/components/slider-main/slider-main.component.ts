import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef, Input } from '@angular/core';
import { Slider } from '../../../../classes/project';
import { SliderBase } from '../../classes/slider-base';
import { SystemService } from '../../../../services/system.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider-main.component.html',
  styleUrls: ['./slider-main.component.css']
})

export class SliderMainComponent implements OnInit {
  @Input() sliderShow;
  @ViewChild('dynamicinsert', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef;
  slider: Slider = new Slider();

  constructor(
    public systemService: SystemService,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {
    this.systemService.subscriptionSlider = this.systemService.eventSliderCallback$.subscribe(obj => {
      this.slider = obj;
      this.systemService.sliderShow = true;
      this.drowSlider();
    })

  }

  ngOnInit() { }

  eventSliderClose() {
    this.systemService.sliderShow = false;
  }

  drowSlider() {
    if (this.slider.component != undefined) {
      var comp = this.componentFactoryResolver.resolveComponentFactory(this.slider.component);
      this.viewContainerRef.clear();
      let componentRef = this.viewContainerRef.createComponent(comp);
      (<any>componentRef.instance).data = {obj :this.slider.object, callBack:this.slider.callBack}
      // componentRef.instance.observeVariable.subscribe(result => {
      // let v = result;  // here observeVariabel is a Observable in dynamic component.

      // })
    }


  }
}
