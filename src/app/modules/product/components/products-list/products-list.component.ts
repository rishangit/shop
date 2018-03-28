import { Component, OnInit } from '@angular/core';
import { HttpCallService } from '../../../../shared/services/http-call.service';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../../../shared/classes/common';
import { Res, Remove, SearchParam } from '../../../../shared/classes/project';
import { ResType } from '../../../../shared/classes/enums';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  productList: Product[] = []
  constructor(
    private httpCallService: HttpCallService,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.getProductList();
  }

  getProductList() {
    let parm: any = {};
    let SearchParam:SearchParam;
    this.productsService.listProduct(parm).subscribe((res: Res) => {
      if (res.typ == ResType.SUCCESS_LIST) {
        this.productList = res.lst;
      }
    })
  }

  removeProduct(product: Product) {
    let remove: Remove = new Remove;
    remove._id = product._id;
    this.productsService.removeProductCatagory(remove).subscribe((res: Res) => {
      if (res.typ == ResType.SUCCESS_OBJ) {
        let remove: Remove = <Remove>res.obj;
        var removeIndex = this.productList.map((product:Product) => { return product._id; }).indexOf(remove._id);
        this.productList.splice(removeIndex, 1);
      }
    })
  }
}
