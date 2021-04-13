import {Component, Input, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import {ElementStyles} from "../store/interfaces";
import {Observable} from "rxjs";
import {getInputStylesSelector} from "../store/element-styles.reducer";

@Component({
  selector:'app-checkbox',
  template: `<input>`
})

export class InputComponent implements OnInit{
  @Input() title = 'Input';
  @Input() elementStyles$: Observable<any>;
  @Input() id = '';

  defaultStyles$: Observable<any>;
  constructor(private store: Store<ElementStyles>) {
  }
  ngOnInit(): void {
    this.defaultStyles$ = this.store.select(getInputStylesSelector);
    this.defaultStyles$.subscribe(data=>this.elementStyles$ = data);
  }
}
