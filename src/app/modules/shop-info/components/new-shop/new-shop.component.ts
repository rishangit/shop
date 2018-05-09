import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';

import { ShopInfoService } from '../../services/shop-info.service';

import '../../../../../assets/plugins/bower_components/jquery-wizard-master/dist/jquery-wizard.min.js'
//service
import { ShopInfo } from '../../../../shared/classes/common';
import { SystemService } from '../../../../shared/services/system.service';

declare var $: any;
declare var wizard: any;
declare var swal: any;
@Component({
  selector: 'app-new-shop',
  templateUrl: './new-shop.component.html',
  styleUrls: ['./new-shop.component.css',
  '../../../../../assets/plugins/bower_components/jquery-wizard-master/css/wizard.css'
]
})
export class NewShopComponent implements OnInit {
  shopInfo: ShopInfo = new ShopInfo();
  constructor(
    private shopInfoService: ShopInfoService,
    private systemService: SystemService
  ) {  }

  ngOnInit() {

  }

  ngAfterViewInit() {

    $('#shopinfo-wizard').wizard({
      onFinish: () => {
        alert(JSON.stringify(this.shopInfo))
        // this.shopInfoService.saveData(this.shopInfo).subscribe(
        //   shopInfo => {
        //     alert(JSON.stringify(shopInfo))
        //   },
        //   error => { }
        // );


        this.shopInfoService.saveShopInfo(this.shopInfo).subscribe(resp => {
          if (resp.suc) {
            alert('shop info saved : ' + resp.obj._id)
          }
        })
        //swal("Message Finish!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat eleifend ex semper, lobortis purus sed.");
      },
    });

    let step = $().wizard('current');
  }

  getShopInfo() {
    return false
  }
}
