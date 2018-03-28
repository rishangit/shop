import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../../shared/services/project.service';
declare var $:any;
declare function CustomInit(): any;
@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css']
})
export class HomeMainComponent implements OnInit {

  constructor(private projectService:ProjectService) { 
    // this.projectService.subscriptionSlider = this.projectService.eventSliderCallback$.subscribe(object => {
    //   this.projectService.sliderShow = true;
    // })

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('body').addClass('fix-header')
    CustomInit.prototype.init();
  }
}
