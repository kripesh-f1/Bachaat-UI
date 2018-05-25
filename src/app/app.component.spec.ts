import {TestBed, async} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {InputFieldEmailComponent} from './shared-utils/form-utils/input-field-email/input-field-email.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        AppComponent,
        InputFieldEmailComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
