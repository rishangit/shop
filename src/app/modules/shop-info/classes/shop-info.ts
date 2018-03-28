
import { FormElementType, FormText } from '../../../shared/modules/form-element/classes/form-element';

export class ShopDetails {
    list: any[] = [
        new FormText('Shop Name','nme'),
        new FormText('Address','ads'),
        new FormText('Area','ara'),
        new FormText('Division','div'),
        new FormText('Catagory','cat'),
        new FormText('Telephone','tel'),        
        new FormText('Image','img'),
    ];
}