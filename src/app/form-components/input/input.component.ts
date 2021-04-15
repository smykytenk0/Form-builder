import {Component, Input, OnInit} from '@angular/core';
import {initialState} from "../../store/element-styles.reducer";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() inputStyles=initialState.inputStyles;

  constructor() { }

  ngOnInit(): void {
  }

}
