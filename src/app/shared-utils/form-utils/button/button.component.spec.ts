import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initialize the ButtonComponent', () => {
    expect(component).toBeTruthy();
  });
  it('should check whether the button is present or not', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button')).toBeTruthy();
  });
  it('should set value to the button', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.buttonValue = 'Send';
    fixture.detectChanges();
    const button = compiled.querySelector('button');
    expect(button.innerHTML).toBe('Send');
  });
  it('should set button class to the button', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.buttonClass = 'btn btn-primary';
    fixture.detectChanges();
    const button = compiled.querySelector('button');
    expect(button.className).toBe('btn btn-primary');
  });
  it('should set button type to the button', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.buttonType = 'button';
    fixture.detectChanges();
    const button = compiled.querySelector('button');
    expect(button.getAttribute('type')).toBe('button');
  });
});
