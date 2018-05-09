import { Component, OnInit } from '@angular/core';
declare var $:any;
declare function CustomInit(): any;
@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css']
})
export class HomeMainComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('body').addClass('fix-header')
    CustomInit.prototype.init();
  }
}
