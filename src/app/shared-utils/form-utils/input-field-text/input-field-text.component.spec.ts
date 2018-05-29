import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {InputFieldTextComponent} from './input-field-text.component';

describe('InputFieldTextComponent', () => {
  let component: InputFieldTextComponent;
  let fixture: ComponentFixture<InputFieldTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputFieldTextComponent],
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

  it('should initialize input-text component', () => {
    expect(component).toBeTruthy();
  });
  it('should show required error message when the input field value is empty', () => {
    const element = fixture.debugElement.nativeElement;
    component.inputType = 'text';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const input = fixture.debugElement.query(By.css('input'));
      const el = input.nativeElement;
      expect(el.value).toBe('');
      el.value = '';
      el.dispatchEvent(new Event('input'));
      expect(fixture.componentInstance.inputType).toBe('text');
    });
    expect(element.querySelector('.error').innerText).toEqual('This field is required');
  });
  it('should give minimum length error when the input field length is less than min-length', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.minLength = 3;
    component.inputType = 'text';
    const input = compiled.querySelector('input');
    input.value = 'ra';
    fixture.detectChanges();
    const error = compiled.querySelector('.form-group .alert').children[1];
    expect(error.innerHTML.includes('Min length should be ')).toBeTruthy();
  });
  it('should give maximum length error when the input field length is more than max-length', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.minLength = 5;
    component.inputType = 'text';
    const input = compiled.querySelector('input');
    input.value = 'abhisekh';
    fixture.detectChanges();
    const error = compiled.querySelector('.form-group .alert').children[2];
    expect(error.innerHTML.includes('Max length should be ')).toBeTruthy();
  });
  it( 'should give number pattern required error when the input field value is text', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.minLength = 5;
    component.inputType = 'number';
    const input = compiled.querySelector('input');
    input.value = 'abhisekh';
    fixture.detectChanges();
    const error = compiled.querySelector('.form-group .alert').children[3];
    expect(error.innerHTML.includes('Pattern should be number')).toBeTruthy();
  });
  it('should give alphabet pattern required error when the input field value is number', () => {
    const element = fixture.debugElement.nativeElement;
    component.inputType = 'text';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const input = fixture.debugElement.query(By.css('input'));
      const el = input.nativeElement;
      expect(el.value).toBe('');
      el.value = '1234';
      el.dispatchEvent(new Event('input'));
      expect(fixture.componentInstance.inputType).toBe('text');
    });
    const error = element.querySelector('.form-group .alert').children[4];
    expect(error.innerHTML.includes('Pattern should be alphabet')).toBeTruthy();
  });
});
