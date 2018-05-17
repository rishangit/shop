import { Injectable } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { SubHeader, Res, Setting } from '../classes/project';
import { Subject } from 'rxjs';
import { SettingService } from '../../modules/setting/services/setting.service';
import { ResType } from '../classes/enums';

@Injectable()
export class SystemService {

  //sub header
  subscriptionAddNew: ISubscription;
  subHeader: SubHeader = new SubHeader;
  sysSetting:Setting;
  eventAddNewCallback = new Subject<any>();
  eventAddNewCallback$ = this.eventAddNewCallback.asObservable();
  //end - sub header
  //slider
  sliderShow: boolean = false;
  subscriptionSlider: ISubscription;
  eventSliderCallback = new Subject<any>();
  eventSliderCallback$ = this.eventSliderCallback.asObservable();
  //end - slider
  //sync
  eventSyncCallback = new Subject<any>();
  eventSyncCallback$ = this.eventSyncCallback.asObservable();
  //end - sync

   constructor(
    // private settingService: SettingService
  ) {

  }

  // getSystemSetting() {
  //   this.settingService.getSetting_global().subscribe((res: Res) => {
  //     debugger
  //     switch (res.typ) {
  //       case ResType.SUCCESS_OBJ:
          
  //         break;
  //     }
  //   })
  // }

}
