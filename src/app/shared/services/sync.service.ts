import { Injectable } from '@angular/core';
import { HttpCallService } from './http-call.service';
import { SyncItem, ShopInfo, StockItem, Product } from '../classes/common';
import { DbType, ResType } from '../classes/enums';
import { Res } from '../classes/project';


@Injectable()
export class SyncService {
  syncItemList: SyncItem[];
  shopInfo: ShopInfo;
  constructor(private httpCallService: HttpCallService) {
    this.getCurrentShopInfo();
  }

  syncData() {
    let obj = {}
    this.httpCallService.post('list_sync_item', obj).subscribe(resp => {
      if (resp.suc) {
        this.syncItemList = resp.obj;
        if (this.syncItemList.length > 0) {
          this.getSyncFullData();
        }
      }
    })
  }

  syncDataWithServer() {

  }

  getSyncFullData() {
    for (let syncItem of this.syncItemList) {
      switch (syncItem.sdb) {
        case DbType.SHOP_DB:
          this.httpCallService.post('get_shop_info', { _id: syncItem.syc }).subscribe(resp => {
            debugger
            if (resp.suc) {
              let syncFullItem: any = resp.obj;
              this.saveShopInfoToServer(syncFullItem);
            }
          })
          break;
        case DbType.STOCK_DB:
          this.httpCallService.post('get_stock_item', { _id: syncItem.syc }).subscribe(resp => {
            debugger
            if (resp.suc) {
              let syncFullItem: any = resp.obj;
              this.saveLiveStockToServer(syncFullItem);
            }
          })
          break;
      }
    }
  }

  saveShopInfoToServer(shopInfo: ShopInfo) {
    this.httpCallService.server_post('save_shop_info', shopInfo).subscribe(resp => {
      if (resp.suc) {
      }
    })
  }

  saveLiveStockToServer(stockItem: StockItem) {
    let liveStock: any = {};
    liveStock._id = stockItem._id;
    liveStock.epr = stockItem.epr; //Expiration date
    liveStock.mft = stockItem.mft; // Manufacture date
    liveStock.sel = stockItem.sel; //Selling Prce
    liveStock.prd = stockItem.prd; //Product
    liveStock.noi = stockItem.noi; // Nomber of Items
    liveStock.location = this.shopInfo.location;
    this.getProduct(stockItem.prd, (product: Product) => {
      liveStock.inx = product.nme + ' ' + product.mfd + ' ' + product.des;
      this.httpCallService.server_post('save_live_stock', liveStock).subscribe(resp => {
        if (resp.suc) {
        }
      })
    })

  }

  getCurrentShopInfo() {
    this.httpCallService.post('list_shop_info', {}).subscribe((res:Res) => {
      if (res.typ == ResType.SUCCESS_LIST) {
        this.shopInfo = res.lst[0];
      }
    })
  }

  getProduct(id,callBack) {
    this.httpCallService.post('get_product', {_id:id}).subscribe(resp => {
      if (resp.suc) {
        let product = resp.obj;
        callBack(product)
      }
    })
  }
}
