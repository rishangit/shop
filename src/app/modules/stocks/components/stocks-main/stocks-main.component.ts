import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//services
import { ProjectService } from '../../../../shared/services/project.service';


@Component({
  selector: 'app-stocks-main',
  templateUrl: './stocks-main.component.html',
  styleUrls: ['./stocks-main.component.css']
})
export class StocksMainComponent implements OnInit {

  constructor(
    private projectService: ProjectService,
    private router: Router
  ) {
    this.projectService.subHeader.btnAddNew = true;
    if (this.projectService.subscriptionAddNew != undefined)
      this.projectService.subscriptionAddNew.unsubscribe();
    this.projectService.subscriptionAddNew = this.projectService.eventAddNewCallback$.subscribe(object => {
      this.addNewItems();
    })

  }

  ngOnInit() {
  }

  addNewItems() {
    this.router.navigate(['/stocks/newitems'])
  }


}
