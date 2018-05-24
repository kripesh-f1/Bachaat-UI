import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';

import {LabelComponent} from './label.component';

describe('LabelComponent', () => {
  let component: LabelComponent;
  let fixture: ComponentFixture<LabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [LabelComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initialize the component', () => {
    expect(component).toBeTruthy();
  });

  it('should show Email Address label', () => {
    const element = fixture.debugElement.nativeElement;
    component.isRequired = true;
    component.labelName = 'Email Address';
    fixture.detectChanges();
    expect(element.querySelector('label')).toBeDefined();
    expect(element.querySelector('label').innerText).toEqual('Email Address');
  });

  it('should show Email Address (optional) label when isRequired is false', () => {
    const element = fixture.debugElement.nativeElement;
    component.isRequired = false;
    component.labelName = 'Email Address';
    fixture.detectChanges();
    expect(element.querySelector('label')).toBeDefined();
    expect(element.querySelector('label').innerText).toEqual('Email Address (optional)');
  });
});
