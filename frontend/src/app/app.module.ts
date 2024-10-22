import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule, } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { LoginModule } from './modules/login/login.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { LoginRoutingModule } from './modules/login/login-routing.module';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    LoginRoutingModule,
    DashboardModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
