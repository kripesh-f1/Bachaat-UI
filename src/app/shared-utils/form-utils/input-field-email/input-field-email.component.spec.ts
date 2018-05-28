import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';

import {InputFieldEmailComponent} from './input-field-email.component';

describe('InputFieldEmailComponent', () => {
  let component: InputFieldEmailComponent;
  let fixture: ComponentFixture<InputFieldEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [InputFieldEmailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFieldEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initialize the component', () => {
    expect(component).toBeTruthy();
  });

  it('should define input element ', () => {
    const element = fixture.debugElement.nativeElement;
    expect(element.querySelector('input')).toBeDefined();
  });

  it('should enter an email address', () => {
    const element = fixture.debugElement.nativeElement;
    element.querySelector('input').value = 'rowansiwakoti@gmail.com';
    fixture.detectChanges();
    expect(element.querySelector('input').value).toEqual('rowansiwakoti@gmail.com');
  });

  it('should alert error message when an email address is invalid', () => {
    const element = fixture.debugElement.nativeElement;
    element.querySelector('input').value = 'rowansiwakoti@';
    fixture.detectChanges();
    const div = element.querySelector('.form-group .alert').children[1];
    expect(div.innerHTML.includes('email@example.com')).toBeTruthy();
  });

  it('should show required message when the input field is empty', () => {
    const element = fixture.debugElement.nativeElement;
    element.querySelector('input').value = '';
    fixture.detectChanges();
    const div = element.querySelector('.form-group .alert').children[0];
    expect(div.innerHTML.includes('Email is required')).toBeTruthy();
  });

});
