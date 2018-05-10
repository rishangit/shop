import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingTab } from '../../../../shared/classes/project';

@Component({
  selector: 'app-setting-main',
  templateUrl: './setting-main.component.html',
  styleUrls: ['./setting-main.component.css']
})
export class SettingMainComponent implements OnInit {
  //system
  settingTabList: SettingTab[] = [{ _id: 'billing', nme: 'Billing', cls: 'ti-home' }, { _id: 'theme', nme: 'Theme', cls: 'ti-user' }];
  constructor(private router: Router) { }

  ngOnInit() {
  }


  eventTab_click(settingTab: SettingTab) {

    this.router.navigate(['/setting/' + settingTab._id])
    // switch (settingTab.nme) {
    //   case 'billing':

    //     break;
    //   case 'theme':

    //     break;
    // }
    // alert(JSON.stringify(settingTab));
    

  }
}

