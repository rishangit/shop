import { Component, OnInit } from '@angular/core';
import { ShopInfo } from '../../../../shared/classes/common';
import { HttpCallService } from '../../../../shared/services/http-call.service';
import { ShopInfoService } from '../../services/shop-info.service';
import { Res } from '../../../../shared/classes/project';
import { ResType } from '../../../../shared/classes/enums';

@Component({
  selector: 'shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {

  shopInfoList: ShopInfo[] = []
  constructor(
    private httpCallService: HttpCallService,
    private shopService: ShopInfoService
  ) { }

  ngOnInit() {
    this.getShopList();
  }

  getShopList() {
    let parm: any = {};
    this.shopService.listShops(parm).subscribe((res: Res) => {
      if (res.typ == ResType.SUCCESS_LIST) {
        this.shopInfoList = res.lst;
      }
    })
  }

}
