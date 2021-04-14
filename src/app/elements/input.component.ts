import {Component, Input, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import {CustomComponent, ElementStyles} from "../store/interfaces";
import {Observable} from "rxjs";
import {getInputStylesSelector} from "../store/element-styles.reducer";

@Component({
  selector:'app-checkbox',
  template: `<input>`
})

export class InputComponent implements CustomComponent{
  id = "input"
}
