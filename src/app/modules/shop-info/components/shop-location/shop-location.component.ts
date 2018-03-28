import { Component, OnInit, ElementRef, EventEmitter, NgZone, ViewChild, AfterViewInit, Input } from '@angular/core';
import { AgmCoreModule, LatLngLiteral, MapsAPILoader } from '@agm/core';
import { FormControl } from '@angular/forms';
import { AgmMap } from '@agm/core';


import { ShopInfoService } from '../../services/shop-info.service';
import { ShopInfo } from '../../../../shared/classes/common';
declare var google: any;
@Component({
  selector: 'shop-location',
  templateUrl: './shop-location.component.html',
  styleUrls: ['./shop-location.component.css']
})
export class ShopLocationComponent implements OnInit {

  @Input() shopInfo: ShopInfo;
  address: string;
  lat: number = 7.8606610401854695;
  lng: number = 80.65338134765625;
  zoom: number = 8;
  searchControl: FormControl;
  searchElementRef: ElementRef;
  addressLoading = false;
  mapChoose = false;
  constructor(
    private shopInfoService: ShopInfoService,
    private agmCoreModule: AgmCoreModule,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private elementRef: ElementRef
  ) {

    
  }

  ngOnInit() {

    this.searchControl = new FormControl();
    if (this.shopInfo.location.coordinates[0] == undefined)
      this.shopInfo.location.coordinates[0] = this.lat;
    // this.shopInfo.location.coordinates[0] = this.shopInfo.location.coordinates[0] != undefined ? this.shopInfo.lat : this.lat;
    if (this.shopInfo.location.coordinates[1] == undefined)
      this.shopInfo.location.coordinates[1] = this.lng;
    //this.shopInfo.lng = this.shopInfo.lng != undefined ? this.shopInfo.lng : this.lng;
    if (this.shopInfo.zom == undefined)
      this.shopInfo.zom = this.zoom;
    //this.shopInfo.zom = this.shopInfo.zom != undefined ? this.shopInfo.zom : this.zoom;

    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(
        this.elementRef.nativeElement.querySelector("#googlesearch"), {
          types: ["address"]
        });

      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: any = autocomplete.getPlace();
          this.shopInfo.ads = place.formatted_address;
          this.shopInfo.location.coordinates[0] = place.geometry.location.lat();
          this.shopInfo.location.coordinates[1] = place.geometry.location.lng();
          //this.valueChange();
        });
      });
    });
  }

  eventMap_click(event) {
    this.mapChoose = true;
    this.shopInfo.location.coordinates[0] = event.coords.lat;
    this.shopInfo.location.coordinates[1] = event.coords.lng;
    this.funcGetAddress(event.coords.lat, event.coords.lng)
  }

  eventSearch_click(){
    this.shopInfoService.searchData(this.shopInfo).subscribe(
      shopInfo => { 
        alert(JSON.stringify(shopInfo))
      },
      error => {} 
    );
  }

  eventZoom_change(event) {
    this.zoom = event;
    this.elemetDataChange();
  }

  valueChange() {
    this.elemetDataChange();
  }

  funcGetAddress(latitude, longitude) {
    const latLng: LatLngLiteral = {
      lat: latitude,
      lng: longitude
    };
    let geocoder = new google.maps.Geocoder();
    this.addressLoading = true;
    geocoder.geocode({ 'latLng': latLng }, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        this.shopInfo.ads = results[0].formatted_address;
        this.elemetDataChange();
      }
      this.addressLoading = false;
    })
  }

  elemetDataChange() {
    //alert(this.lat + " || "+this.lng)
  }
}


