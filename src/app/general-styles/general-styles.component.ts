import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {getGeneralStylesSelector} from "../store/styles.reducer";
import {select, Store} from "@ngrx/store";
import {State} from "../store";
import {Observable} from "rxjs";
import {StylesActions} from "../store/styles.actions";

@Component({
  selector: 'app-general-styles',
  templateUrl: './general-styles.component.html',
  styleUrls: ['./general-styles.component.scss']
})
export class GeneralStylesComponent implements OnInit {
  generalForm: FormGroup;
  showStyles = false;
  generalFormData$: Observable<any>;
  @Input() styleObj: {[key:string]:string};
  keys: string[];

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.keys = Object.keys(this.styleObj);
    this.generalForm = new FormGroup({
      backgroundColor: new FormControl(this.styleObj.backgroundColor),
      border: new FormControl(this.styleObj.border),
      width: new FormControl(this.styleObj.width),
      height: new FormControl(this.styleObj.height),
      borderRadius: new FormControl(this.styleObj.borderRadius),
    });
  }

  enterGeneralStyles(payload) {
    this.store.dispatch(StylesActions.setGeneralStyle({payload}));
  }
}
