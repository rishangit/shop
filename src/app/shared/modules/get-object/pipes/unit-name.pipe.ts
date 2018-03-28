import { Pipe, PipeTransform } from '@angular/core';
import { GetObjService } from '../services/get-obj.service';
import { Res } from '../../../classes/project';
import { ProductUnit } from '../../../classes/common';
import { ResType } from '../../../classes/enums';

@Pipe({
  name: 'unitName'
})
export class UnitNamePipe implements PipeTransform {

  constructor(private getObjService:GetObjService){}

  transform(value: any, args?: any): any {
    return new Promise((resolve, reject) => {
      this.getObjService.getProductUnit({ _id: value }).subscribe((res: Res) => {
        let nme: string;
        switch (res.typ) {
          case ResType.SUCCESS_OBJ:
          let productUnit: ProductUnit = <ProductUnit>res.obj;
          nme = productUnit.nme;
          resolve(nme);
          break;
          case ResType.SUCCESS_EMPTY:
          this.getObjService.getProductUnit_Server({ _id: value }).subscribe(res => {
            if (res.suc) {
              let productUnit: ProductUnit = <ProductUnit>res.obj;
              nme = productUnit.nme;
              this.getObjService.saveProductUnit(productUnit).subscribe((res: Res) => {
                if (res.typ == ResType.SUCCESS_OBJ) {
                  alert("Unit saved from server")
                }
              })
              resolve(nme);
            } else
              nme = "Name Not found";
          })
          break;
        }
      })

    });
    
  }

}
