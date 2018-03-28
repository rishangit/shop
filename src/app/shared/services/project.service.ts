import { Injectable } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs';
import { SubHeader } from '../classes/project';
import { flatten } from '@angular/router/src/utils/collection';

@Injectable()
export class ProjectService {

  //sub header
  subscriptionAddNew: ISubscription;
  subHeader: SubHeader = new SubHeader;
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

  constructor() {

  }

}
