import { Component, OnInit, ViewChildren, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('search') inpSearch: ElementRef;

  query: string;
  productList: Product[] = [];
  stockItemList: StockItem[] = [];
  selectedProduct: Product;
  selectedStockItem: StockItem;
  billItemDetailsList: Map<string, BillItemDetails> = new Map<string, BillItemDetails>();
  billIDList: string[] = [];
  noOfItems: number = 1;
  timer: any;
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
          this.billingService.addStockItem(this.selectedStockItem);
          this.addtoBillItemDetailList();
        }
      }
    })
  }

  addtoBillItemDetailList() {
    this.billingService.addBillingItem({ noi: this.noOfItems, prd: this.selectedProduct._id, stk: this.selectedStockItem._id });
  }

  eventNoOfItems_keydown(event) {
    if (event.which == 13 || event.keyCode == 13) {
      this.billingService.updateNoOfItems(this.noOfItems, () => {
        setTimeout(() => {
          this.inpSearch.nativeElement.focus();
          this.noOfItems = 1;
        }, 100);
      });
    }
  }
}
