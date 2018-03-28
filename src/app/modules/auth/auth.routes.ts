import { Routes } from '@angular/router';

import { AuthMainComponent } from './components/auth-main/auth-main.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

export const AuthRoutes: Routes = [
    {
        path: '',
        component: AuthMainComponent,
        children: [
            {path:'login', component:LoginComponent}]
    }
]