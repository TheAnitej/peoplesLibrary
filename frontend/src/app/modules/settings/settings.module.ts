import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsDashboardComponent } from './settings-dashboard/settings-dashboard.component';
import { CardModule } from 'primeng/card';
import { MultiSelectModule } from 'primeng/multiselect';
import { Button } from 'primeng/button';


@NgModule({
  declarations: [
    SettingsDashboardComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    CardModule,
    MultiSelectModule,
    Button
    ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SettingsModule { }
