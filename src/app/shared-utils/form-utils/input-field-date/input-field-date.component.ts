import {Component, Input, OnInit} from '@angular/core';
import {NgbDatepickerConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-input-field-date',
  templateUrl: './input-field-date.component.html',
  styleUrls: ['./input-field-date.component.css'],
  providers: [NgbDatepickerConfig]
})
export class InputFieldDateComponent implements OnInit {

  @Input() isRequired: boolean;
  dateModel: Date;

  constructor(config: NgbDatepickerConfig) {

    this.isRequired = true;

    // customize default values of datepickers used by this component tree
    config.minDate = {year: 1900, month: 1, day: 1};
    config.maxDate = {year: 2099, month: 12, day: 31};

    // days that don't belong to current month are not visible
    config.outsideDays = 'hidden';
  }

  ngOnInit(): void {
  }
}
