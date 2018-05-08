import { Pipe, PipeTransform } from '@angular/core';
import { GetObjService } from '../services/get-obj.service';
import { GetByID, Res } from '../../../classes/project';
import { ResType } from '../../../classes/enums';
import { StockItem } from '../../../classes/common';

@Pipe({
  name: 'stock'
})
export class StockPipe implements PipeTransform {


  constructor(private getObjService: GetObjService) { }
  transform(value: any, prop?: any): any {
    return new Promise((resolve, reject) => {
      let getByID: GetByID = new GetByID;
      getByID._id = value;
      this.getObjService.getStockItems(getByID).subscribe((res: Res) => {
        switch (res.typ) {
          case ResType.SUCCESS_OBJ:
            let stockItem: StockItem = <StockItem>res.obj;
            resolve(stockItem[prop]);
            break;
          case ResType.SUCCESS_EMPTY:
            let msg = "Name Not found";
            break;
        }
      })
    })
  }

}
