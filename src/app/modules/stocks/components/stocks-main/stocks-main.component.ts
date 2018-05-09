import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//services
import { SystemService } from '../../../../shared/services/system.service';

@Component({
  selector: 'app-stocks-main',
  templateUrl: './stocks-main.component.html',
  styleUrls: ['./stocks-main.component.css']
})
export class StocksMainComponent implements OnInit {

  constructor(
    private systemService: SystemService,
    private router: Router
  ) {
    this.systemService.subHeader.btnAddNew = true;
    if (this.systemService.subscriptionAddNew != undefined)
      this.systemService.subscriptionAddNew.unsubscribe();
    this.systemService.subscriptionAddNew = this.systemService.eventAddNewCallback$.subscribe(object => {
      this.addNewItems();
    })

  }

  ngOnInit() {
  }

  addNewItems() {
    this.router.navigate(['/stocks/newitems'])
  }


}
