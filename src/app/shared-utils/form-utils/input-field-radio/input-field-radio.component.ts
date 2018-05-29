import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputFieldRadioComponent),
  multi: true
};

@Component({
  selector: 'app-input-field-radio',
  templateUrl: './input-field-radio.component.html',
  styleUrls: ['./input-field-radio.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class InputFieldRadioComponent implements OnInit, ControlValueAccessor {
  @Input() data: Array<any>;
  @Input() viewType: string;
  @Input() radioGroupName: string;
  @Input() isRequired: boolean;
  // The internal data model
  private innerValue: any = '';

  // Placeholders for the callbacks which are later provided
  // by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  constructor() {
    this.isRequired = true;
  }

  ngOnInit() {
    if (!this.radioGroupName) {
      this.radioGroupName = 'default';
    }
  }
  // get accessor
  get value(): any {
    return this.innerValue;
  }

  // set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  // From ControlValueAccessor interface
  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  // From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  // From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
