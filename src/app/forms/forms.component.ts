import {Component, OnInit} from '@angular/core';
import {ButtonComponent} from "../elements/button.component";
import {CheckboxComponent} from "../elements/checkbox.component";
import {InputComponent} from "../elements/input.component";
import {LabelComponent} from "../elements/label.component";
import {SelectComponent} from "../elements/select.component";
import {TextareaComponent} from "../elements/textarea.component";


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  cdkDragList = [ButtonComponent, CheckboxComponent, InputComponent, LabelComponent, SelectComponent, TextareaComponent];
  cdkDropList = [];
  constructor() { }

  ngOnInit(): void {
  }

}
