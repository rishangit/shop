import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting-main',
  templateUrl: './setting-main.component.html',
  styleUrls: ['./setting-main.component.css']
})
export class SettingMainComponent implements OnInit {
  //system
  settingTabList: SettingTab[] = [{_id:'home',nme:'Home',cls:'ti-home'},{_id:'user',nme:'User',cls:'ti-user'}];
  constructor() { }

  ngOnInit() {
  }

}

export class SettingTab {
  _id?: string;
  nme?: string;// name
  cls?: string; //class
}