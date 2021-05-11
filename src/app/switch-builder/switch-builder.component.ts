import {Component, Injectable, Input} from '@angular/core';
import { Observable } from "rxjs";
import { select, Store } from "@ngrx/store";

import { getStylesBy } from "../store/styles.reducer";
import { getTypeFromName } from "../store/helper";
import { ElementType } from "../store/interfaces";

@Component({
  selector: 'app-switch-builder',
  templateUrl: './switch-builder.component.html',
  styleUrls: ['./switch-builder.component.scss']
})
export class SwitchBuilderComponent {
  ElementType = ElementType;

  type: string;
  styles$: Observable<{ [key: string]: string }>;
  @Input() set item(name:string){
    this.type = getTypeFromName(name);
    this.styles$ = this.store.pipe(select(getStylesBy(name)));
  };
  constructor(private store: Store) {}

}
