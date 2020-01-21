import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';

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

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onBlur(field: NgModel) {
    console.log('in onBlur: ', field.valid)
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
    this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      result => console.log('succes: ', result),
      error => console.log('error: ', error)
    );
  }

}
