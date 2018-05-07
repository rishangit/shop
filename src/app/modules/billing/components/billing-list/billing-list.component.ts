import { Component, OnInit } from '@angular/core';
import { BillingService } from '../../services/billing.service';

@Component({
  selector: 'billing-list',
  templateUrl: './billing-list.component.html',
  styleUrls: ['./billing-list.component.css']
})
export class BillingListComponent implements OnInit {

  constructor(public  billingService: BillingService) { }

  ngOnInit() {
    this.billingService.billItemList
  }

  removeBillingItem(){

  }
}
