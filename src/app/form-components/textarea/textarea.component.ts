import {Component, Input, OnInit} from '@angular/core';
import {initialState} from "../../store/element-styles.reducer";

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {
  @Input() textareaStyles=initialState.textareaStyles

  constructor() { }

  ngOnInit(): void {
  }

}
