import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }


  save(key: string, val: any) {
    localStorage.setItem(key, JSON.stringify(val));
  }

  get(key: string) {
    return JSON.parse(localStorage.getItem(key))
  }

  saveProjectData(key: string, val: any, pfx?: string) {
    let newkey: string = pfx != undefined ? 'prj_' + pfx + '_' + key : 'prj_' + key;
    this.save(newkey, val);
  }

  saveSystemData(key: string, val: any, pfx?: string) {
    let newkey: string = pfx != undefined ? 'sys_' + pfx + '_' + key : 'sys_' + key;
    this.save(newkey, val);
  }

  getProjectData(key: string, pfx?: string) {
    let newkey: string = pfx != undefined ? 'prj_' + pfx + '_' + key : 'prj_' + key;
    return this.get(newkey)
  }

  getSystemData(key: string, pfx?: string) {
    let newkey: string = pfx != undefined ? 'sys_' + pfx + '_' + key : 'sys_' + key;
    return this.get(newkey)
  }
}



export enum LocalStorageType {
  USER = 1,

}