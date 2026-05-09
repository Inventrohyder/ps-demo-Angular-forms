import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RatingModule } from 'ngx-bootstrap/rating';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

import { DataService } from '../data/data.service';
import { UserSettingsFormComponent } from './user-settings-form.component';

describe('UserSettingsFormComponent', () => {
  let component: UserSettingsFormComponent;
  let fixture: ComponentFixture<UserSettingsFormComponent>;
  const dataService = {
    getSubscriptionTypes: () => of(['Monthly', 'Annual', 'Lifetime']),
    postUserSettingsForm: () => of({})
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UserSettingsFormComponent],
      imports: [
        FormsModule,
        ButtonsModule,
        BsDatepickerModule,
        RatingModule,
        TimepickerModule
      ],
      providers: [
        provideNoopAnimations(),
        { provide: DataService, useValue: dataService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSettingsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
