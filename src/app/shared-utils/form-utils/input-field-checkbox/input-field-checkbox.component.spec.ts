import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';

import {InputFieldCheckboxComponent} from './input-field-checkbox.component';

describe('InputFieldCheckboxComponent', () => {
  let component: InputFieldCheckboxComponent;
  let fixture: ComponentFixture<InputFieldCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [InputFieldCheckboxComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFieldCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initialize the component', () => {
    expect(component).toBeTruthy();
  });

  it('should check whether the checkbox is present or not', () => {
    const element = fixture.debugElement.nativeElement;
    component.data = 'football';
    fixture.detectChanges();
    expect(element.querySelector('input')).toBeTruthy();
  });

  it('should show checkbox as inline element when display type is set inline', () => {
    const element = fixture.debugElement.nativeElement;
    component.data = 'cricket';
    component.viewType = 'inline';
    fixture.detectChanges();
    expect(element.querySelector('input')).toBeTruthy();
    expect(element.querySelector('input').value).toBe('cricket');
    expect(element.querySelector('div').style.display).toBe('inline');
  });

  it('should show checkbox as block element when display type is set block', () => {
    const element = fixture.debugElement.nativeElement;
    component.data = 'volleyball';
    component.viewType = 'block';
    fixture.detectChanges();
    expect(element.querySelector('input')).toBeTruthy();
    expect(element.querySelector('input').value).toBe('volleyball');
    expect(element.querySelector('div').style.display).toBe('block');
  });
});
