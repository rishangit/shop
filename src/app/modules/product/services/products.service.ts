import { Injectable } from '@angular/core';
import { HttpCallService } from '../../../shared/services/http-call.service';
import { Product, ProductCatagory } from '../../../shared/classes/common';
import { Observable } from 'rxjs/Observable';
import { SearchParam, Remove } from '../../../shared/classes/project';

@Injectable()
export class ProductsService {

  constructor(private httpCallService:HttpCallService) { }

  listProductfromServer(parm) {
    return this.httpCallService.server_post('listproduct', parm)
  }

  saveProductfromServer(product:Product){
    return this.httpCallService.post('save_product_from_server',product)
  }

  listProduct(searchParam: SearchParam): Observable<any> {
    return this.httpCallService.post('list_product',searchParam)
  }
  
  getProductCatagory(productCatagory: ProductCatagory): Observable<any> {
    return this.httpCallService.post('get_product_catagory',productCatagory)
  }

  removeProductCatagory(remove: Remove): Observable<any> {
    return this.httpCallService.post('remove_product',remove)
  }
  
}
