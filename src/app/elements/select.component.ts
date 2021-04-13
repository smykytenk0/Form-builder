import {Component, Input, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {ElementStyles} from "../store/interfaces";
import {getSelectStylesSelector} from "../store/element-styles.reducer";

@Component({
  selector:'app-input',
  template: `<select>
    <option>Option 1</option>
    <option>Option 2</option>
  </select>`
})

export class SelectComponent implements OnInit{
  @Input() title = 'Select';
  @Input() elementStyles$: Observable<any>;
  @Input() id = '';
  @Input() options = [];
  defaultStyles$: Observable<any>;
  constructor(private store: Store<ElementStyles>) {
  }
  ngOnInit(): void {
    this.defaultStyles$ = this.store.select(getSelectStylesSelector);
    this.defaultStyles$.subscribe(data=>this.elementStyles$ = data);
  }
}
