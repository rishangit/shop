import { Injectable } from '@angular/core';
import { HttpCallService } from '../../../shared/services/http-call.service';
import { Setting, GetByID, Res, BillingSetting } from '../../../shared/classes/project';
import { ResType } from '../../../shared/classes/enums';
import { Subject } from 'rxjs';

@Injectable()
export class SettingService {

  setting: Setting = new Setting;
  eventSettingCallback = new Subject<any>();
  eventSettingCallback$ = this.eventSettingCallback.asObservable();

  constructor(private httpCallService: HttpCallService) {
    this.getSetting();
  }

  saveSetting() {
    let postCall: string;
    if (this.setting._id) {
      postCall = 'update_setting'
    } else {
      this.setting._id = 'setting';
      postCall = 'save_setting'
    }
    this.httpCallService.post(postCall, this.setting).subscribe((res: Res) => {
      switch (res.typ) {
        case ResType.SUCCESS_OBJ:
          //this.setting = <Setting>res.obj;
          break;
      }
    })
  }

  getSetting() {
    let getByID: GetByID = new GetByID;
    getByID._id = "setting";
    this.httpCallService.post('get_setting', getByID).subscribe((res: Res) => {
      switch (res.typ) {
        case ResType.SUCCESS_OBJ:
          this.setting = <Setting>res.obj;
          this.eventSettingCallback.next(this.setting);
          break;
        case ResType.SUCCESS_EMPTY:
          this.setting.billingSetting = new BillingSetting;
          this.eventSettingCallback.next(this.setting);
          break;
      }
    })
  }

  removeSetting() {
    this.httpCallService.post('remove_setting', this.setting).subscribe((res: Res) => {
      switch (res.typ) {
        case ResType.SUCCESS_OBJ:
          this.setting = <Setting>res.obj;
          break;
      }
    })
  }
}
