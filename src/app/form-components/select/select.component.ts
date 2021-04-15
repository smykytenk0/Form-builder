import {Component, Input, OnInit} from '@angular/core';
import {initialState} from "../../store/element-styles.reducer";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() selectStyles=initialState.selectStyles

  constructor() { }

  ngOnInit(): void {
  }

}
