import {Component, Input, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {CustomComponent, ElementStyles} from "../store/interfaces";
import {getTextareaStylesSelector} from "../store/element-styles.reducer";

@Component({
  selector:'app-input',
  template: `<textarea>Textarea</textarea>`
})

export class TextareaComponent implements CustomComponent{
  id = "textarea"
}
