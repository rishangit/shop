import { Component, OnInit, Input } from '@angular/core';
import { ShopDetails } from '../../classes/shop-info';
import { ShopInfoService } from '../../services/shop-info.service';
import { ShopInfo } from '../../../../shared/classes/common';

@Component({
  selector: 'shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.css']
})
export class ShopDetailsComponent implements OnInit {

  @Input() shopInfo: ShopInfo;
  shopDetails: ShopDetails = new ShopDetails;
  

  constructor(
    private shopInfoService: ShopInfoService
  ) {

  }

  ngOnInit() {
  }

}
