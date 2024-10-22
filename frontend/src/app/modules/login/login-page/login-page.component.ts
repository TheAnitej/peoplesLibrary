import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertModule } from '../../../shared/alert/alert.module';
import { Message, MessageService } from 'primeng/api';
import { AlertServiceService } from '../../../shared/alert/alert-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  registerForm: FormGroup;
  isloading = false;
  message : Message =  {severity: 'success', summary: 'Success', detail: 'Message Content' }
  ;
  constructor(private fb: FormBuilder, private http: HttpClient,private messageService: MessageService,
     private router: Router
  ) {
      this.registerForm = this.fb.group({
          username: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

load(){
  // this.isloading = !this.isloading;
  this.router.navigate(['/signup']);
}
handleClick(){
  console.log('Navigating to Signup');
  this.router.navigate(['/signup']);
}

}

