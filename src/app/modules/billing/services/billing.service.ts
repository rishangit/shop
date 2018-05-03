import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpCallService } from '../../../shared/services/http-call.service';

@Injectable()
export class BillingService {

  constructor(private httpCallService: HttpCallService) { }

  listStockItems(parm: any): Observable<any> {
    return this.httpCallService.post('list_stock_item', parm)
  }

}
