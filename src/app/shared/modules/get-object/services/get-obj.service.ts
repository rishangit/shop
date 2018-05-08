import { Injectable } from '@angular/core';
import { ProductCatagory, Manufacture, ProductUnit } from '../../../classes/common';
import { HttpCallService } from '../../../services/http-call.service';
import { Observable } from 'rxjs/Observable';
import { GetByID } from '../../../classes/project';

@Injectable()
export class GetObjService {

  constructor(private httpCallService: HttpCallService) { }

  getProductCatagory(productCatagory: ProductCatagory): Observable<any> {
    return this.httpCallService.post('get_product_catagory', productCatagory)
  }

  getProductCatagory_Server(productCatagory: ProductCatagory): Observable<any> {
    return this.httpCallService.server_post('get_product_catagory', productCatagory)
  }

  saveProductCatagory(productCatagory: ProductCatagory): Observable<any> {
    return this.httpCallService.post('save_product_catagory', productCatagory)
  }

  getProductManufacture(manufacture: Manufacture): Observable<any> {
    return this.httpCallService.post('get_product_manufacture', manufacture);
  }

  getProductManufacture_Server(manufacture: Manufacture): Observable<any> {
    return this.httpCallService.server_post('get_product_manufacture', manufacture);
  }

  saveProductManufacture(manufacture: Manufacture): Observable<any> {
    return this.httpCallService.post('save_product_manufacture', manufacture)
  }


  getProductUnit(productUnit: ProductUnit): Observable<any> {
    return this.httpCallService.post('get_product_unit', productUnit);
  }

  getProductUnit_Server(productUnit: ProductUnit): Observable<any> {
    return this.httpCallService.server_post('get_product_unit', productUnit);
  }

  saveProductUnit(productUnit: ProductUnit): Observable<any> {
    return this.httpCallService.post('save_product_unit', productUnit)
  }

  getProduct(GetByID: GetByID): Observable<any> {
    return this.httpCallService.post('get_product', GetByID)
  }

  getProductfromServer(parm) {
    return this.httpCallService.server_post('get_product', parm)
  }

  getStockItems(GetByID: GetByID): Observable<any> {
    return this.httpCallService.post('get_stock_item', GetByID)
  }

}
