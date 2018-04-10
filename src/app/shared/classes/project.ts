import { ResType } from "./enums";

//A
//B
//C
//D
//E
//F
//G
export class GetByID {
    _id?: string;
}
//H
//I
//J
//K
//L
//M
//N
//O
//P
//Q
//R
export class Remove {
    _id?: string;
}

export class Res {
    typ?: ResType;
    obj?: {};
    lst?: any[];
}
//S
export class SearchParam {
    query?: string = "";
    limit?: number = 3;
    sort?: any = {};
    page?: number = 1;
}

export class Slider {
    show?: boolean = false;
    title?: string = "Slider window";
    width?: number = 50; //%
    top?: number = 0;//px
    component?:any;
    object?: any;
    callBack?: Function
}

export class SubHeader {
    btnAddNew?: boolean = false;
}
//T
//U
//V
//W
//X
//Y
//Z