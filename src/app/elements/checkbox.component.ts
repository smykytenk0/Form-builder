import {Component, Input, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import {CustomComponent, ElementStyles} from "../store/interfaces";
import {Observable} from "rxjs";
import {getCheckboxStylesSelector} from "../store/element-styles.reducer";

@Component({
  selector:'app-checkbox',
  template: `<div>
    <input type="checkbox" id="checkbox">
    <label for="checkbox">Checkbox</label>
  </div>`
})

export class CheckboxComponent implements CustomComponent{
  id = 'checkbox';
}
