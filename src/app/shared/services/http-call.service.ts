import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'

import { config } from '../classes/config';

@Injectable()
export class HttpCallService {

  constructor(
    private http: Http
  ) { }

  post(url: string, body: any) {  
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(config.apiUrl + url, body, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  server_post(url: string, body: any) {  
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(config.serverApiUrl + url, body, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }
}
