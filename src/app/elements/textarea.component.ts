import {Component, Input, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {ElementStyles} from "../store/interfaces";
import {getTextareaStylesSelector} from "../store/element-styles.reducer";

@Component({
  selector:'app-input',
  template: `<textarea>Textarea</textarea>`
})

export class TextareaComponent implements OnInit{
  @Input() title = 'Textarea';
  @Input() elementStyles$: Observable<any>;
  @Input() id = '';
  defaultStyles$: Observable<any>;
  constructor(private store: Store<ElementStyles>) {
  }
  ngOnInit(): void {
    this.defaultStyles$ = this.store.select(getTextareaStylesSelector);
    this.defaultStyles$.subscribe(data=>this.elementStyles$ = data);
  }
}
