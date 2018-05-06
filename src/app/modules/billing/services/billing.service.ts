import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpCallService } from '../../../shared/services/http-call.service';
import { BillItem } from '../../../shared/classes/common';

@Injectable()
export class BillingService {

  billItemList: BillItem[] = [];
  constructor(private httpCallService: HttpCallService) { }

  listStockItems(parm: any): Observable<any> {
    return this.httpCallService.post('list_stock_item', parm)
  }

}
