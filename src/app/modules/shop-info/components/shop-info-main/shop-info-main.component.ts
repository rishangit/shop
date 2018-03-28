import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';

import { ShopInfoService } from '../../services/shop-info.service';

import '../../../../../assets/plugins/bower_components/jquery-wizard-master/dist/jquery-wizard.min.js'
//service
import { ProjectService } from '../../../../shared/services/project.service';
import { ShopInfo } from '../../../../shared/classes/common';
import { Router } from '@angular/router';

declare var $: any;
declare var wizard: any;
declare var swal: any;
@Component({
  //selector: 'app-shop-info-main',
  templateUrl: './shop-info-main.component.html',
  styleUrls: ['./shop-info-main.component.css',
    '../../../../../assets/plugins/bower_components/jquery-wizard-master/css/wizard.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class ShopInfoMainComponent implements OnInit {
  shopInfo: ShopInfo;
  constructor(
    private shopInfoService: ShopInfoService,
    private projectService: ProjectService,
    private router:Router
  ) {
    this.projectService.subHeader.btnAddNew = true;
    if (this.projectService.subscriptionAddNew != undefined)
    this.projectService.subscriptionAddNew.unsubscribe();
  this.projectService.subscriptionAddNew = this.projectService.eventAddNewCallback$.subscribe(object => {
    this.shopinfo();
  })
  }

  ngOnInit() {

  }

  shopinfo() {
    this.router.navigate(['/shopinfo/newshop'])
  }
}
