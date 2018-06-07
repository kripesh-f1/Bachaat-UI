import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {DataTablesModule} from 'angular-datatables';

import {AppComponent} from './app.component';
import {LabelComponent} from './shared-utils/form-utils/label/label.component';
import {InputFieldEmailComponent} from './shared-utils/form-utils/input-field-email/input-field-email.component';
import {InputFieldTextComponent} from './shared-utils/form-utils/input-field-text/input-field-text.component';
import {InputFieldPasswordComponent} from './shared-utils/form-utils/input-field-password/input-field-password.component';
import {InputFieldDateComponent} from './shared-utils/form-utils/input-field-date/input-field-date.component';
import {ButtonComponent} from './shared-utils/form-utils/button/button.component';
import {InputFieldRadioComponent} from './shared-utils/form-utils/input-field-radio/input-field-radio.component';
import {InputFieldCheckboxComponent} from './shared-utils/form-utils/input-field-checkbox/input-field-checkbox.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {UserComponent} from './components/user/user.component';
import {AppRoutingModule} from './app-routing.module';
import {UpdateUserComponent} from './components/user/update-user/update-user.component';
import {MessageService} from './shared-utils/services/message.service';
import {UserService} from './shared-utils/services/user-service/user.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFieldDateComponent,
    LabelComponent,
    InputFieldPasswordComponent,
    InputFieldEmailComponent,
    InputFieldTextComponent,
    ButtonComponent,
    InputFieldRadioComponent,
    InputFieldCheckboxComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    UpdateUserComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    DataTablesModule
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    UserService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
