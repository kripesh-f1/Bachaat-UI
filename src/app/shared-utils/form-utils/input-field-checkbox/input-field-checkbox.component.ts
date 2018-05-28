import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-field-checkbox',
  templateUrl: './input-field-checkbox.component.html',
  styleUrls: ['./input-field-checkbox.component.css']
})
export class InputFieldCheckboxComponent implements OnInit {

  @Input() values?: string[];
  @Input() value?: string;
  @Input() isRequired?: boolean;
  isActive: boolean;
  constructor() {
    this.isRequired = true;
  }

  ngOnInit() {
  }

}
