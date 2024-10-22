import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from '../../shared/alert/alert.module';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AlertServiceService } from '../../shared/alert/alert-service.service';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FloatLabelModule } from 'primeng/floatlabel';
import { SignupComponent } from './signup/signup.component';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

@NgModule({
  declarations: [
    LoginPageComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    IconFieldModule,
    InputIconModule,
    ToastModule,
    ButtonModule,
    RippleModule,
    AlertModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    FloatLabelModule,
    CardModule],
  providers: [MessageService, MessageService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }
