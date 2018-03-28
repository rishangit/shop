import { Pipe, PipeTransform } from '@angular/core';
import { GetObjService } from '../services/get-obj.service';
import { Res, GetByID } from '../../../classes/project';
import { ResType } from '../../../classes/enums';
import { Product } from '../../../classes/common';

@Pipe({
  name: 'product'
})
export class ProductPipe implements PipeTransform {

  constructor(private getObjService: GetObjService) { }
  transform(value: any, prop?: any): any {
    return new Promise((resolve, reject) => {
      let getByID: GetByID = new GetByID;
      getByID._id = value;
      this.getObjService.getProduct(getByID).subscribe((res: Res) => {
        debugger
        switch (res.typ) {
          case ResType.SUCCESS_OBJ:
            let product: Product = <Product>res.obj;
            resolve(product[prop]);
            break;
          case ResType.SUCCESS_EMPTY:
            this.getObjService.getProductfromServer(getByID).subscribe(res => {
              if (res.suc) {
                let product: Product = <Product>res.obj;
                resolve(product[prop]);
              } else {
                let msg = "Name Not found";
                resolve(msg);
              }
            })
            break;
        }
      })
    })
  }

}
