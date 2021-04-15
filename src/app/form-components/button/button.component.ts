import {Component, Input, OnInit} from '@angular/core';
import {initialState} from "../../store/element-styles.reducer";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() btnStyles = initialState.btnStyles;

  constructor() { }

  ngOnInit(): void {
  }

}
