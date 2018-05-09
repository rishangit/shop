import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';

//service
import { SyncService } from './shared/services/sync.service';
import { HttpCallService } from './shared/services/http-call.service';
import { LocalStorageService } from './shared/services/local-storage.service';
import { SystemService } from './shared/services/system.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,

  ],
  providers: [HttpCallService, SyncService, LocalStorageService, SystemService],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
