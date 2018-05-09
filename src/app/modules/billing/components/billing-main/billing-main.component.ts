import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../../../shared/services/system.service';

@Component({
  selector: 'app-billing-main',
  templateUrl: './billing-main.component.html',
  styleUrls: ['./billing-main.component.css']
})
export class BillingMainComponent implements OnInit {

  constructor(private systemService: SystemService) {
    this.systemService.subHeader.btnAddNew = false;
  }

  ngOnInit() {
  }

}
