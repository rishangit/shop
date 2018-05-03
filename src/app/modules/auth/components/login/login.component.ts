import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, Validator } from '@angular/forms';
import { LoginService } from './login.service';
import { Res } from '../../../../shared/classes/project';
import { ResType } from '../../../../shared/classes/enums';
import { LoginData } from '../../../../shared/classes/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData: LoginData
  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginData = {};
  }

  ngOnInit() {
    this.loginData.eml = 'n.rishee@gmail.com';
    this.loginData.pss = "12345"
  }

  doLogin(event) {
    this.loginService.login(this.loginData).subscribe((res:Res) => { 
      if (res.typ == ResType.SUCCESS_OBJ) {
        this.router.navigate(['/home'])
      }
    })
  }
}