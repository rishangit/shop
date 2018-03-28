import { Pipe, PipeTransform } from '@angular/core';
import { GetObjService } from '../services/get-obj.service';
import { ProductCatagory } from '../../../classes/common';
import { Res } from '../../../classes/project';
import { ResType } from '../../../classes/enums';

@Pipe({
  name: 'catagoryName'
})
export class CatagoryNamePipe implements PipeTransform {

  constructor(private getObjService: GetObjService) {
  }

  transform(value: any, args?: any): any {
    return new Promise((resolve, reject) => {
      this.getObjService.getProductCatagory({ _id: value }).subscribe((res: Res) => {
        let nme: string;
        switch (res.typ) {
          case ResType.SUCCESS_OBJ:
            let productCatagory: ProductCatagory = <ProductCatagory>res.obj;
            nme = productCatagory.nme;
            resolve(nme);
            break;
          case ResType.SUCCESS_EMPTY:
            this.getObjService.getProductCatagory_Server({ _id: value }).subscribe(res => {
              if(res.suc){
                let productCatagory: ProductCatagory = <ProductCatagory>res.obj;
                nme = productCatagory.nme;
                  this.getObjService.saveProductCatagory(productCatagory).subscribe((res:Res) => {
                      if(res.typ == ResType.SUCCESS_OBJ){
                        alert("Catagory saved from server")
                      }
                  })
                resolve(nme);
              }else
              nme = "Name Not found";      
            })
            
            break;
        }
       
      })
    });
  }
}