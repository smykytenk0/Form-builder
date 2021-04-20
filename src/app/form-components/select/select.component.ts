import {Component, Input, OnInit} from '@angular/core';
import {initialState} from "../../store/styles.reducer";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() selectStyles=initialState.selectStyles;
  @Input() select = 'select';
  @Input() options = ['option1', 'option2'];

  constructor() { }

  ngOnInit(): void {
  }

}
