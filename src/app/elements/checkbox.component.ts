import {Component, Input, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import {ElementStyles} from "../store/interfaces";
import {Observable} from "rxjs";
import {getCheckboxStylesSelector} from "../store/element-styles.reducer";

@Component({
  selector:'app-checkbox',
  template: `<div>
    <input type="checkbox" id="checkbox">
    <label for="checkbox">Checkbox</label>
  </div>`
})

export class CheckboxComponent implements OnInit{
  @Input() title = 'Checkbox';
  @Input() elementStyles$: Observable<any>;
  @Input() id = '';

  defaultStyles$: Observable<any>;
  constructor(private store: Store<ElementStyles>) {
  }
  ngOnInit(): void {
    this.defaultStyles$ = this.store.select(getCheckboxStylesSelector);
    this.defaultStyles$.subscribe(data=>this.elementStyles$ = data);
  }
}
