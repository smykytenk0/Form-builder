import {Component, Input, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import {CustomComponent, ElementStyles} from "../store/interfaces";
import {Observable} from "rxjs";
import {getLabelStylesSelector} from "../store/element-styles.reducer";

@Component({
  selector:'app-input',
  template: `<label>Label</label>`
})

export class LabelComponent implements CustomComponent{
  id = "label";
}
