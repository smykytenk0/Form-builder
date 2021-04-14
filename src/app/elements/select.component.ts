import {Component, Input, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {CustomComponent, ElementStyles} from "../store/interfaces";
import {getSelectStylesSelector} from "../store/element-styles.reducer";

@Component({
  selector:'app-input',
  template: `<select>
    <option>Option 1</option>
    <option>Option 2</option>
  </select>`
})

export class SelectComponent implements CustomComponent{
  id = "select";

}
