import { Pipe, PipeTransform } from '@angular/core';
import { GetObjService } from '../services/get-obj.service';
import { Res, GetByID } from '../../../classes/project';
import { ResType } from '../../../classes/enums';
import { Product } from '../../../classes/common';
import { LocalStorageService } from '../../../services/local-storage.service';

@Pipe({
  name: 'product'
})
export class ProductPipe implements PipeTransform {

  constructor(
    private getObjService: GetObjService,
    private localStorageService: LocalStorageService) { }

  transform(value: any, prop?: any): any {
    return new Promise((resolve, reject) => {
      let getByID: GetByID = new GetByID;
      getByID._id = value;
      let product: Product = this.localStorageService.getProjectData(getByID._id, 'prod')
      if (product) {
        resolve(product[prop]);
      } else {
        this.getObjService.getProduct(getByID).subscribe((res: Res) => {
          switch (res.typ) {
            case ResType.SUCCESS_OBJ:
              product = <Product>res.obj;
              this.localStorageService.saveProjectData(getByID._id, product, 'prod')
              resolve(product[prop]);
              break;
            case ResType.SUCCESS_EMPTY:
              this.getObjService.getProductfromServer(getByID).subscribe(res => {
                if (res.suc) {
                  product = <Product>res.obj;
                  this.localStorageService.saveProjectData(getByID._id, product, 'prod')
                  resolve(product[prop]);
                } else {
                  let msg = "Name Not found";
                  resolve(msg);
                }
              })
              break;
          }
        })
      }
    })
  }

}
