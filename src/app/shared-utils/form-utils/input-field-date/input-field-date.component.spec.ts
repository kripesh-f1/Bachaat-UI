import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {InputFieldDateComponent} from './input-field-date.component';

describe('InputFieldDateComponent', () => {
  let component: InputFieldDateComponent;
  let fixture: ComponentFixture<InputFieldDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        NgbModule.forRoot()
      ],
      declarations: [InputFieldDateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFieldDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initialize the component', () => {
    expect(component).toBeTruthy();
  });
  it('should enter a valid date to the input field', () => {
    const element = fixture.debugElement.nativeElement;
    component.isRequired = true;
    element.querySelector('input').value = '1996-10-07';
    fixture.detectChanges();
    expect(element.querySelector('input')).toBeDefined();
    expect(element.querySelector('input').value).toEqual('1996-10-07');
  });

  it('should alert required message when the input is empty', () => {
    const element = fixture.debugElement.nativeElement;
    component.isRequired = true;
    element.querySelector('input').value = '';
    fixture.detectChanges();
    expect(element.querySelector('input').value).toEqual('');
    const error = element.querySelector('.form-group .alert').children[0];
    expect(error.innerHTML.includes('This field is required')).toBeTruthy();
  });

  it('should alert invalid pattern message when the input is invalid', () => {
    const element = fixture.debugElement.nativeElement;
    component.isRequired = true;
    element.querySelector('input').value = '1996-110-27';
    fixture.detectChanges();
    expect(element.querySelector('input').value).toEqual('1996-110-27');
    const error = element.querySelector('.form-group .alert').children[1];
    expect(error.innerHTML.includes('Invalid pattern')).toBeTruthy();
  });
});
