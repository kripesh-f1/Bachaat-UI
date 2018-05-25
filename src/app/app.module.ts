import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { InputFieldEmailComponent } from './shared-utils/form-utils/input-field-email/input-field-email.component';


@NgModule({
  declarations: [
    AppComponent,
    InputFieldEmailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
