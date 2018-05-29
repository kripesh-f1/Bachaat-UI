import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() buttonValue: string;
  @Input() buttonType?: string;
  @Input() buttonClass?: string;
  constructor() {
    this.buttonClass = 'btn btn-success';
    this.buttonType = 'button';
  }

  ngOnInit() {
  }

}
