import { Component, OnInit } from '@angular/core';
import { SearchParam, Res } from '../../../../shared/classes/project';
import { ResType } from '../../../../shared/classes/enums';
import { BillingService } from '../../services/billing.service';
import { Product, StockItem, BillItemDetails, BillItem } from '../../../../shared/classes/common';
import { StockService } from '../../../stocks/services/stock.service';
import { ProductsService } from '../../../product/services/products.service';

@Component({
  selector: 'billing-form',
  templateUrl: './billing-form.component.html',
  styleUrls: ['./billing-form.component.css']
})
export class BillingFormComponent implements OnInit {

  query: string;
  productList: Product[] = [];
  stockItemList: StockItem[] = [];
  selectedProduct: Product;
  selectedStockItem: StockItem;
  billItemDetailsList: Map<string, BillItemDetails> = new Map<string, BillItemDetails>();
  billIDList: string[] = [];
  constructor(
    private productsService: ProductsService,
    private stockService: StockService,
    private billingService: BillingService
  ) { }

  ngOnInit() {
  }



  eventSearch_click() {

    let parm: SearchParam = {};
    parm.query = this.query;
    debugger
    this.productsService.listProduct(parm).subscribe((res: Res) => {
      if (res.typ == ResType.SUCCESS_LIST) {
        this.productList = res.lst;
        if (this.productList.length == 1) {
          this.selectedProduct = this.productList[0];
          this.getStockList(this.selectedProduct._id)
        }
      }
    })
  }

  getStockList(prd: string) {
    let parm: any = {};
    parm.query = prd;
    this.stockService.listStockItems(parm).subscribe((res: Res) => {
      if (res.typ == ResType.SUCCESS_LIST) {
        this.stockItemList = res.lst;
        if (this.stockItemList.length == 1) {
          this.selectedStockItem = this.stockItemList[0];
          this.addToBillItemDetailList();
        }
      }
    })
  }

  addToBillItemDetailList() {
    //let id: string = this.selectedProduct._id + '_' + this.selectedStockItem._id;
    this.billingService.billItemList.push({ noi: 1, prd: this.selectedProduct._id, stk: this.selectedStockItem._id })
    //this.billItemDetailsList.set(id, { _id: id, noi: 1, prd: this.selectedProduct, stk: this.selectedStockItem })
    this.billIDList = Array.from(this.billItemDetailsList.keys());
  }
}
