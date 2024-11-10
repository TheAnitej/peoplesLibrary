import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesDashboardComponent } from './messages-dashboard/messages-dashboard.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { StepperModule } from 'primeng/stepper';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    MessagesDashboardComponent,
    ChatBoxComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    CardModule,
    ButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    StepperModule,
    MatTableModule,
    FormsModule
  ]
})
export class MessagesModule { }
