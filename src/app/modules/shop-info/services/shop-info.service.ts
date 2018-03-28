import { Injectable } from '@angular/core';

import { HttpCallService } from '../../../shared/services/http-call.service';
import { Observable } from 'rxjs';
import { ShopInfo } from '../../../shared/classes/common';

@Injectable()
export class ShopInfoService {
  constructor(
    private httpCallService: HttpCallService
  ) { }

  saveShopInfo(shopInfo: ShopInfo): Observable<any> {
    return this.httpCallService.post('save_shop_info', shopInfo)
  }

  searchData(shopInfo: ShopInfo): Observable<any> {
    return this.httpCallService.post('get_shop_info', shopInfo)
  }
  
  listShops(parm: any): Observable<any> {
    return this.httpCallService.post('list_shop_info',parm)
  }
}
