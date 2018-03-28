import { Injectable } from '@angular/core';
import { HttpCallService } from '../../../shared/services/http-call.service';
import { StockItem } from '../../../shared/classes/common';
import { Observable } from 'rxjs/Observable';
import { Remove } from '../../../shared/classes/project';

@Injectable()
export class StockService {

  constructor(private httpCallService: HttpCallService) { }

  saveStockItems(stockItem: StockItem) {
    return this.httpCallService.post('save_stock_item', stockItem)
  }

  listStockItems(parm: any): Observable<any> {
    return this.httpCallService.post('list_stock_item', parm)
  }

  removeStockItems(remove: Remove): Observable<any> {
    return this.httpCallService.post('remove_stock_item', remove)
  }

}
