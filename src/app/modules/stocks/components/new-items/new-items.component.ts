import { Component, OnInit } from '@angular/core';
//services
import { ProductsService } from '../../../product/services/products.service';
import { SearchParam, Res } from '../../../../shared/classes/project';
import { Product, StockItem } from '../../../../shared/classes/common';
import { StockService } from '../../services/stock.service';
import { Router } from '@angular/router';
import { ResType } from '../../../../shared/classes/enums';

@Component({
  selector: 'app-new-items',
  templateUrl: './new-items.component.html',
  styleUrls: ['./new-items.component.css']
})
export class NewItemsComponent implements OnInit {
  productList: Product[] = [];
  product: Product;
  stockItem: StockItem = {}
  query: string = "";
  minimized: boolean = false;
  avtiveMode: boolean = false;
  constructor(
    private productsService: ProductsService,
    private stockService:StockService,
    private router:Router
  ) {
    this.stockItem.buy = 90;
    this.stockItem.epr = "30/3/2018";
    this.stockItem.mft = "10/01/2018";
    this.stockItem.sel = 100;
  }

  ngOnInit(
  ) {
  }


  eventSearch_click() {

    let parm: SearchParam = {};
    parm.query = this.query;
    this.productsService.listProduct(parm).subscribe((res:Res) => {
      if (res.typ == ResType.SUCCESS_LIST) {
        this.productList = res.lst;
      }
    })
  }

  eventClose_click() {
    this.router.navigate(['/stocks/list'])
  }

  eventAdd_click(product: Product) {
    this.product = product;
    this.stockItem.prd = this.product._id
  }

  checkEmpty(val) {
    if (val == undefined)
      return "-empty-"
    else
      return val;
  }

  eventEnterItemCords_click() {
    this.avtiveMode = true;
    this.minimized = this.avtiveMode;
  }

  saveItemsToStock() {
    this.stockService.saveStockItems(this.stockItem).subscribe(resp => {
      if (resp.suc) {
        alert('stock saved : ' + resp.obj._id)
      }
    })
  }
  // eventProdItemCode_change(){
  //   alert(JSON.stringify(this.stockItem))
  // }
}
