import {Component, Input, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import {ElementStyles} from "../store/interfaces";
import {Observable} from "rxjs";
import {getLabelStylesSelector} from "../store/element-styles.reducer";

@Component({
  selector:'app-input',
  template: `<label>Label</label>`
})

export class LabelComponent implements OnInit{
  @Input() title = 'Label';
  @Input() elementStyles$: Observable<any>;
  @Input() id = '';
  defaultStyles$: Observable<any>;
  constructor(private store: Store<ElementStyles>) {
  }
  ngOnInit(): void {
    this.defaultStyles$ = this.store.select(getLabelStylesSelector);
    this.defaultStyles$.subscribe(data=>this.elementStyles$ = data);
  }
}
