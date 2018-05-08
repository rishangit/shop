import { UserType } from "./enums";
//A
//B
export class BillItem {
    _id?: string; // Product id + Stock ID
    noi?: number; // Number of Items
    stk?: string; // Stock ID
    prd?: string; // Product id
    amt?:number; //amount
}

export class BillItemDetails {
    _id?: string; // Product id + Stock ID
    noi?: number; // Number of Items
    stk?: StockItem; // Stock ID
    prd?: Product; // Product id
    amt?:number; //amount
}
//C
//D
//E
//F
//G
export class GeoLocation {
    type?: GeoLocationType;
    coordinates?: number[] = [];
}
export enum GeoLocationType {
    Point = 'Point',
    LineString = "LineString",
    Polygon = "Polygon",
    MultiPoint = "MultiPoint",
    MultiLineString = "MultiLineString"
}
//H
//I
//J
//K
//L
export class LoginData {
    eml?: string;
    pss?: string
}
//M
export class Manufacture {
    _id?: string;
    mfd?: string; // manufactured by
    mfa?: string; // Manufacture address
    mfc?: string; // Manufacture contact
    dis?: string; // distributer name
    dia?: string; // distributer adderss
    dic?: string; // distributer contact
}
//N
//O
//P
export class Product {
    _id?: string;
    nme?: string; // Name
    mfd?: string; // manufactured by
    qty?: string; // quantity
    qtu?: string; // quantity unit
    cat?: string; // Catagory
    des?: string; // description
    cod?: string; // Code
}
export class ProductCatagory {
    _id?: string;
    nme?: string; // Name
    des?: string; // description
}
export class ProductUnit {
    _id?: string;
    nme?: string; // Name
    des?: string; // description
}
//Q
//R
//S
export class ShopInfo {
    nme?: string; // name
    ads?: string;
    div?: string;
    ara?: string;
    zom?: number;
    cat?: string;
    img?: string;
    tel?: string;
    location?: GeoLocation = {};
    constructor() {
        this.location.type = GeoLocationType.Point;
        this.location.coordinates = [];
    }
}
export class StockItem {
    _id?: string;
    buy?: number; // Buying Price
    epr?: string; // Expiration date
    mft?: string; // Manufacture date
    sel?: number; // Selling Price
    prd?: string; // Product id
    noi?: number; // Number of Items
}
export class SyncItem {
    _id?: string;
    typ?: number; // 0 add; 1 update; 2 delete
    syc?: string; // sync
    sdb?: number; // sync database type 
}
//T
//U
export class User {
    fnm?: string;
    lnm?: string;
    unm?: string;
    eml?: string;
    pss?: string;
    img?: string;
    typ?: UserType;
}
//V
//W
//X
//Y
//Z