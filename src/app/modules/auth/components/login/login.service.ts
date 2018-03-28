import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpCallService } from '../../../../shared/services/http-call.service';
import { LoginUser } from '../../../../shared/interfaces/user.interface';
import { LoginData } from '../../../../shared/classes/common';

@Injectable()
export class LoginService {

  constructor(
    private httpCallService:HttpCallService
  ) { }


  login(loginData: LoginData): Observable<any> {
    return this.httpCallService.post('login',loginData)
  }
}
