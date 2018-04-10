import { Component, OnInit } from '@angular/core';
//services

import { SyncService } from '../../../../services/sync.service';
import { ProjectService } from '../../../../services/project.service';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent implements OnInit {

  constructor(
    public projectService: ProjectService,
    private syncService: SyncService
  ) {


  }


  ngOnInit() {

  }

  evBuyAdmin_click() {


  }

  evntAddNew_click() {
    let obj: any = {}
    this.projectService.eventAddNewCallback.next(obj)
  }

  eventSync_click() {
    this.syncService.syncData();
  }
}
