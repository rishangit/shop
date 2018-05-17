import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../services/setting.service';
import { BillingSetting, Setting } from '../../../../shared/classes/project';
import { WysiwygRetunObj } from '../../../../shared/modules/wysiwyg/components/wysiwyg-main/wysiwyg-main.component';

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
    if (this.settingService.setting) {
      this.billingSetting = this.settingService.setting.billingSetting;
    }
  }

  eventSave_click() {
    this.settingService.saveSetting();
  }

  eventRemove_click() {
    this.settingService.removeSetting();
  }

  eventWysiwyg_change(wysiwygRetunObj: WysiwygRetunObj) {
    switch (wysiwygRetunObj.id) {
      case 'hd':
        this.billingSetting.header = wysiwygRetunObj.html;
        break;
      case 'ft':
        this.billingSetting.footer = wysiwygRetunObj.html;
        break;
    }
  }
}
