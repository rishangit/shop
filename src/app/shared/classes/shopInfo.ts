import { GeoLocation, GeoLocationType } from './common'

export class ShopInfo {
    nme?: string; // name
    ads?: string;
    div?: string;
    ara?: string;
    //lat: number;
    //lng: number;
    zom: number;
    cat: string;
    img?: string;
    location?: GeoLocation = {};
    constructor(){        
        this.location.type = GeoLocationType.Point;
        this.location.coordinates = [];
    }
}
