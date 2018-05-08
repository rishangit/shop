import { Component, OnInit } from '@angular/core';
import { BillingService } from '../../services/billing.service';

@Component({
  selector: 'billing-info',
  templateUrl: './billing-info.component.html',
  styleUrls: ['./billing-info.component.css']
})
export class BillingInfoComponent implements OnInit {

  constructor(public  billingService: BillingService) { }

  ngOnInit() {
  }

}
