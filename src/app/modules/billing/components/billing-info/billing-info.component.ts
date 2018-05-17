import { Component, OnInit } from '@angular/core';
import { BillingService } from '../../services/billing.service';
import { SystemService } from '../../../../shared/services/system.service';

@Component({
  selector: 'billing-info',
  templateUrl: './billing-info.component.html',
  styleUrls: ['./billing-info.component.css']
})
export class BillingInfoComponent implements OnInit {

  constructor(public  billingService: BillingService,
  public systemService:SystemService ) { }

  ngOnInit() {
   
  }

}
