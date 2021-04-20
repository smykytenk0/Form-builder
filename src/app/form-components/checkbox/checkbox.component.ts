import {Component, Input, OnInit} from '@angular/core';
import {initialState} from "../../store/styles.reducer";

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() checkboxStyles = initialState.checkboxStyles;
  @Input() label = 'Label';

  constructor() { }

  ngOnInit(): void {
  }

}
