import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../../shared/services/project.service';
import { ProductsService } from '../../services/products.service';
import { SearchParam } from '../../../../shared/classes/project';
import { Product } from '../../../../shared/classes/common';
import { Router } from '@angular/router';
//import
@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  minimized: boolean = false;
  query: string = "";
  productList: Product[] = [];
  constructor(
    private projectService: ProjectService,
    private productsService: ProductsService,
    private router:Router
  ) { }

  ngOnInit() {
  }


  eventMinus_click() {
    this.minimized = !this.minimized;
  }
  eventClose_click() {
    this.router.navigate(['/product/list'])
  }

  eventSearch_click() {
    let searchParam: SearchParam = new SearchParam();
    searchParam.query = this.query;
    this.productsService.listProductfromServer(searchParam).subscribe(resp => {
      if (resp.suc) {
        this.productList = resp.obj
      }
    })
  }

  eventAdd_click(product: Product) {
    this.productsService.saveProductfromServer(product).subscribe(resp => {
      if (resp.suc) {
        alert('product saved : ' + resp.obj._id)
      }
    })
  }
}
