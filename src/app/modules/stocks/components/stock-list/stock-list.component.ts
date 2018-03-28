import { Component, OnInit } from '@angular/core';
import { HttpCallService } from '../../../../shared/services/http-call.service';
import { Product, StockItem } from '../../../../shared/classes/common';
import { StockService } from '../../services/stock.service';
import { Res, Remove } from '../../../../shared/classes/project';
import { ResType } from '../../../../shared/classes/enums';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

   stockItemList:StockItem[] = []
  constructor(
    private httpCallService: HttpCallService,
    private productsService: StockService,
    private stockService:StockService
  ) { }

  ngOnInit() {
    this.getStockList();
  }

  getStockList() {
    let parm: any = {};
    this.stockService.listStockItems(parm).subscribe((res:Res) => {
      if (res.typ == ResType.SUCCESS_LIST) {
        this.stockItemList = res.lst;
      }
    })
  }

  removeStock(stockItem: StockItem) {
    let remove: Remove = new Remove;
    remove._id = stockItem._id;
    this.productsService.removeStockItems(remove).subscribe((res: Res) => {
      if (res.typ == ResType.SUCCESS_OBJ) {
        let remove: Remove = <Remove>res.obj;
        var removeIndex = this.stockItemList.map((stockItem:StockItem) => { return stockItem._id; }).indexOf(remove._id);
        this.stockItemList.splice(removeIndex, 1);
      }
    })
  }
}
