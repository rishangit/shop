import { Pipe, PipeTransform } from '@angular/core';
import { GetObjService } from '../services/get-obj.service';
import { GetByID, Res } from '../../../classes/project';
import { ResType } from '../../../classes/enums';
import { StockItem } from '../../../classes/common';
import { LocalStorageService } from '../../../services/local-storage.service';

@Pipe({
  name: 'stock'
})
export class StockPipe implements PipeTransform {

  constructor(
    private getObjService: GetObjService,
    private localStorageService: LocalStorageService) { }

  transform(value: any, prop?: any): any {
    return new Promise((resolve, reject) => {
      let getByID: GetByID = new GetByID;
      getByID._id = value;
      let stockItem: StockItem = this.localStorageService.getProjectData(getByID._id, 'stock')
      if (stockItem) {
        resolve(stockItem[prop]);
      } else {
        this.getObjService.getStockItems(getByID).subscribe((res: Res) => {
          switch (res.typ) {
            case ResType.SUCCESS_OBJ:
              stockItem = <StockItem>res.obj;
              this.localStorageService.saveProjectData(getByID._id, stockItem, 'stock')
              resolve(stockItem[prop]);
              break;
            case ResType.SUCCESS_EMPTY:
              let msg = "Name Not found";
              break;
          }
        })
      }
    })
  }

}
