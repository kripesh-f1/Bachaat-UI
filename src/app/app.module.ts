import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {LabelComponent} from './shared-utils/form-utils/label/label.component';
import { InputFieldEmailComponent } from './shared-utils/form-utils/input-field-email/input-field-email.component';
import { InputFieldTextComponent} from './shared-utils/form-utils/input-field-text/input-field-text.component';
import { InputFieldPasswordComponent } from './shared-utils/form-utils/input-field-password/input-field-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LabelComponent,
    InputFieldPasswordComponent,
    InputFieldEmailComponent,
    InputFieldTextComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
