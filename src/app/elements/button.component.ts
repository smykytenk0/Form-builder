import {Component, Input, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import {CustomComponent, ElementStyles} from "../store/interfaces";
import {Observable} from "rxjs";
import {getBtnStylesSelector} from "../store/element-styles.reducer";

@Component({
  selector:'app-button',
  template: `<button>Button</button>`
})

export class ButtonComponent implements CustomComponent{
  id = "button";
}
