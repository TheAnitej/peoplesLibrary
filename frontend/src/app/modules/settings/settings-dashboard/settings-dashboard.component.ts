import { Component } from '@angular/core';
import { genre } from '../../../shared/variables/genres';

@Component({
  selector: 'app-settings-dashboard',
  templateUrl: './settings-dashboard.component.html',
  styleUrl: './settings-dashboard.component.css'
})
export class SettingsDashboardComponent {
  languages = [
    { name: 'Telugu', code: 'NY' },
    { name: 'Hindi', code: 'RM' },
    { name: 'English', code: 'LDN' },
    { name: 'Marati', code: 'IST' },
    { name: 'Tamil', code: 'PRS' }
];

selectedGenres!: genre[];

updatePreferences(){
    console.log('updatePreferences')
}

}
