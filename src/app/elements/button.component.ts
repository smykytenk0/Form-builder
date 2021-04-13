import {Component, Input, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import {ElementStyles} from "../store/interfaces";
import {Observable} from "rxjs";
import {getBtnStylesSelector} from "../store/element-styles.reducer";

@Component({
  selector:'app-button',
  template: `<button>Button</button>`
})

export class ButtonComponent implements OnInit{
  @Input() title = 'Button';
  @Input() elementStyles$: Observable<any>;
  @Input() id = '';

  defaultStyles$: Observable<any>;
  constructor(private store: Store<ElementStyles>) {
  }
  ngOnInit(): void {
    this.defaultStyles$ = this.store.select(getBtnStylesSelector)
    this.defaultStyles$.subscribe(data=>this.elementStyles$ = data);
  }
}
