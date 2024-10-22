import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
