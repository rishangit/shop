import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../services/setting.service';
import { BillingSetting, Setting } from '../../../../shared/classes/project';

@Component({
  selector: 'app-setting-billing',
  templateUrl: './setting-billing.component.html',
  styleUrls: ['./setting-billing.component.css']
})
export class SettingBillingComponent implements OnInit {

  billingSetting: BillingSetting = new BillingSetting;
  constructor(private settingService: SettingService) {
    this.settingService.eventSettingCallback$.subscribe((setting: Setting) => {
      this.billingSetting = setting.billingSetting;
    })
  }

  ngOnInit() {

  }

  eventSave_click() {
    this.settingService.saveSetting();
  }

  eventRemove_click() {
    this.settingService.removeSetting();
  }
}
