import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './modules/login/login-page/login-page.component';
import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m=>m.DashboardModule)},
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: '**', redirectTo: '/login' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
