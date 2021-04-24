import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {initialState} from "../store/styles.reducer";
import {Store} from "@ngrx/store";
import {StylesActions} from "../store/styles.actions";

@Component({
  selector: 'app-acordion-block',
  templateUrl: './accordion-block.component.html',
  styleUrls: ['./accordion-block.component.scss']
})
export class AccordionBlockComponent implements OnInit {
  @Input() title = 'Title';
  @Input() styleObj: {[key:string]:string};
  keys: string[];

  form:FormGroup=new FormGroup({});
  activeItem = false;
  showStyles = false;
  elementForm: FormGroup;
  constructor(private store: Store) { }
  ngOnInit(): void {
    this.keys = Object.keys(this.styleObj);
    this.elementForm = new FormGroup({

    })
  }

  enterChanges(payload){
    this.store.dispatch(StylesActions.setElementStyle({payload}))
  }
}
