export class FromElement {
    label?: string = "";
    class?: string[] = ['col-md-4', 'col-md-8', 'col-md-12'];
    propName?: string = "";
    object?: any;
    error?: string = "";
    constructor(label, propName){
        this.label = label;
        this.propName = propName;
    }
}


export class FormText extends FromElement {
    palaceholder?: string = "";
    maxLength?: number;
    minLength?: number;
    type: number = FormElementType.TEXT;
}

export enum FormElementType {
    CUSTOME = 0,
    TEXT = 1,
    SWITCHER = 2,
    DROPDOWN = 3,
    TEXTAREA = 4,
    NUMBER = 5,
    TEMP_DROPDOWN = 6,

}