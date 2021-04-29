import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {getStylesBy} from "../store/styles.reducer";

@Component({
  selector: 'app-switch',
  templateUrl: './switch-styles.component.html',
  styleUrls: ['./switch-styles.component.scss']
})
export class SwitchStylesComponent {
  @Input() set item(name: string) {
    this.title = name;
    this.styles$ = this.store.pipe(select(getStylesBy(this.title)));
  }

  styles$: Observable<{ [key: string]: string }>;
  title: string;

  constructor(private store: Store) {
  }
}
