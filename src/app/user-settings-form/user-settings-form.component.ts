import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  // Set the values to null so that we start with an empty form
  originalUserSettings: UserSettings = {
    name: null,
    emailoffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  }

  // Using a copy of the original user settings to avoid data corruption
  // in case the user cancels the form or hits the back button without 
  // completing the form
  userSettings: UserSettings = { ...this.originalUserSettings };

  constructor() { }

  ngOnInit() {
  }

}
