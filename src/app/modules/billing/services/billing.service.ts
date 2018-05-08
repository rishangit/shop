import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpCallService } from '../../../shared/services/http-call.service';
import { BillItem } from '../../../shared/classes/common';

@Injectable()
export class BillingService {

  billItemList: BillItem[] = [];
  constructor(private httpCallService: HttpCallService) { }


  addBillingItem(billItem: BillItem) {
    this.billItemList.push(billItem);
  }

  updateNoOfItems(noOfItems,callBack) {
    let ln = this.billItemList.length
    this.billItemList[ln - 1].noi = noOfItems;
    callBack();
  }

}
