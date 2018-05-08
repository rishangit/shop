import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpCallService } from '../../../shared/services/http-call.service';
import { BillItem, StockItem } from '../../../shared/classes/common';
import { StockPipe } from '../../../shared/modules/get-object/pipes/stock.pipe';

@Injectable()
export class BillingService {

  billItemList: BillItem[] = [];
  keyBillItemList: Map<string, BillItem> = new Map<string, BillItem>();
  keyStockItemList: Map<string, StockItem> = new Map<string, StockItem>();
  key: string;
  netTotal: number = 0;
  constructor(private httpCallService: HttpCallService) { }


  addBillingItem(billItem: BillItem) {
    this.key = billItem.prd + '_' + billItem.stk;
    billItem._id = this.key;
    let exsistBillItem: BillItem = new BillItem;
    exsistBillItem = this.keyBillItemList.get(this.key);
    if (exsistBillItem) {
      exsistBillItem.noi = exsistBillItem.noi + 1;
      this.updateAmount(exsistBillItem);
    } else {
      this.keyBillItemList.set(this.key, billItem);
      this.updateAmount(billItem);
    }

    this.updateArray();
  }

  updateNoOfItems(noOfItems, callBack) {
    let exsistBillItem: BillItem = new BillItem;
    exsistBillItem = this.keyBillItemList.get(this.key);
    if (exsistBillItem) {
      exsistBillItem.noi = exsistBillItem.noi + noOfItems - 1;
    } else {
      exsistBillItem.noi = noOfItems;
    }
    this.updateAmount(exsistBillItem);
    this.updateArray();
    callBack();
  }

  updateAmount(exsistBillItem: BillItem) {
    exsistBillItem.amt = exsistBillItem.noi * this.keyStockItemList.get(exsistBillItem.stk).sel
  }


  updateArray() {
    this.billItemList = Array.from(this.keyBillItemList.values());
    this.generateNetTotal();
  }

  addStockItem(stockItem: StockItem) {
    let newStockItem: StockItem = new StockItem;
    Object.assign(newStockItem, stockItem)
    this.keyStockItemList.set(newStockItem._id, newStockItem);
  }

  generateNetTotal() {
    this.netTotal = 0;
    for (let billItem of this.billItemList) {
      this.netTotal = this.netTotal + billItem.amt;
    }
  }
}
