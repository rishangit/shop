import { Pipe, PipeTransform } from '@angular/core';
import { promise } from 'selenium-webdriver';
import { GetObjService } from '../services/get-obj.service';
import { Res } from '../../../classes/project';
import { ResType } from '../../../classes/enums';
import { Manufacture } from '../../../classes/common';

@Pipe({
  name: 'manufacturedName'
})
export class ManufacturedNamePipe implements PipeTransform {

  constructor(private getObjService: GetObjService) { }

  transform(value: any, args?: any): any {
    return new Promise((resolve, reject) => {
      this.getObjService.getProductManufacture({ _id: value }).subscribe((res: Res) => {
        let nme: string;
        switch (res.typ) {
          case ResType.SUCCESS_OBJ:
            let manufacture: Manufacture = <Manufacture>res.obj;
            nme = manufacture.mfd;
            resolve(nme);
            break;
          case ResType.SUCCESS_EMPTY:
            this.getObjService.getProductManufacture_Server({ _id: value }).subscribe(res => {
              if (res.suc) {
                let manufacture: Manufacture = <Manufacture>res.obj;
                nme = manufacture.mfd;
                this.getObjService.saveProductManufacture(manufacture).subscribe((res: Res) => {
                  if (res.typ == ResType.SUCCESS_OBJ) {
                    alert("Manufacture saved from server")
                  }
                })
                resolve(nme);
              } else {
                nme = "Name Not found";
                resolve(nme);
              }

            })
            break;
        }
      })
    })
  }
}