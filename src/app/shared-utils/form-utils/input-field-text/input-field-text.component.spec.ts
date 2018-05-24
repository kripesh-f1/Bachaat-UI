import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { By} from '@angular/platform-browser';
import { InputFieldTextComponent } from './input-field-text.component';
import {DebugElement} from '@angular/core';

describe('InputFieldTextComponent', () => {
  let component: InputFieldTextComponent;
  let fixture: ComponentFixture<InputFieldTextComponent>;
  // let input: DebugElement;
  // let el: HTMLElement ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputFieldTextComponent ],
      imports: [FormsModule, ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFieldTextComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should intilize component', () => {
    expect(component).toBeTruthy();
  });
  it('should show required error message if the input field value is not valid', () => {
    const element = fixture.debugElement.nativeElement;
    component.labelName = 'First name';
    component.minLength = 4;
    component.inputType = 'text';
    component.maxLength = 10;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
       const input = fixture.debugElement.query(By.css('input'));
       const el = input.nativeElement;

      expect(el.value).toBe('rabin');

      el.value = '';
      el.dispatchEvent(new Event('input'));

      expect(fixture.componentInstance.inputType).toBe('text');
    });
    fixture.detectChanges();
    expect(element.querySelector('.min-error').innerText).toEqual('This field is required');
  });
});
