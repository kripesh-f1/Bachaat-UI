import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-input-field-text',
  templateUrl: './input-field-text.component.html',
  styleUrls: ['./input-field-text.component.css']
})
export class InputFieldTextComponent implements OnInit {
  @Input() labelName: string;
  @Input() inputType: string;
  @Input() optional?: boolean;
  @Input() minLength?: number;
  @Input() maxLength?: number;
  firstnameT: string;
  constructor() {
    this.firstnameT = 'rabin';
  }
  ngOnInit() {
  }
}
