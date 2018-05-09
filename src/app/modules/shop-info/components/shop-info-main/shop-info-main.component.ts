import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';

import { ShopInfoService } from '../../services/shop-info.service';

import '../../../../../assets/plugins/bower_components/jquery-wizard-master/dist/jquery-wizard.min.js'
//service
import { ShopInfo } from '../../../../shared/classes/common';
import { Router } from '@angular/router';
import { SystemService } from '../../../../shared/services/system.service';

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
    private systemService: SystemService,
    private router:Router
  ) {
    this.systemService.subHeader.btnAddNew = true;
    if (this.systemService.subscriptionAddNew != undefined)
    this.systemService.subscriptionAddNew.unsubscribe();
  this.systemService.subscriptionAddNew = this.systemService.eventAddNewCallback$.subscribe(object => {
    this.shopinfo();
  })
  }

  ngOnInit() {

  }

  shopinfo() {
    this.router.navigate(['/shopinfo/newshop'])
  }
}
