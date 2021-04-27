import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {getStylesBy} from "../store/styles.reducer";
import {getTypeFromName} from "../store/helper";

@Component({
  selector: 'app-switch-builder',
  templateUrl: './switch-builder.component.html',
  styleUrls: ['./switch-builder.component.scss']
})
export class SwitchBuilderComponent {
  type: string;
  styles$: Observable<{ [key: string]: string }>;
  @Input() set item(name:string){
    this.type = getTypeFromName(name);
    console.log('styles');
    console.log(name);
    this.styles$ = this.store.pipe(select(getStylesBy(name)));
  };
  constructor(private store: Store) { }

}
