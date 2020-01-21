import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name: 'Milton', 
    emailoffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'here are some notes...'
  }

  // Using a copy of the original user settings to avoid data corruption
  // in case the user cancels the form or hits the back button without 
  // completing the form
  userSettings : UserSettings = { ...this.originalUserSettings };

  constructor() { }

  ngOnInit() {
  }

}
