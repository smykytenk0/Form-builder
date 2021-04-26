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
  @Input() funcType = '';
  keys: string[];

  form:FormGroup=new FormGroup({});
  activeItem = false;
  showStyles = false;
  elementForm: FormGroup;
  constructor(private store: Store) { }
  ngOnInit(): void {
    this.keys = Object.keys(this.styleObj);
    this.elementForm = new FormGroup({
      borderRadius: new FormControl(this.styleObj.borderRadius),
      outline: new FormControl(this.styleObj.outline),
      border: new FormControl(this.styleObj.border),
      width: new FormControl(this.styleObj.width),
      height: new FormControl(this.styleObj.height),
      backgroundColor: new FormControl(this.styleObj.backgroundColor),
      color: new FormControl(this.styleObj.color),
      cursor: new FormControl(this.styleObj.cursor),
      margin: new FormControl(this.styleObj.margin),
      fontSize: new FormControl(this.styleObj.fontSize),
      paddingLeft: new FormControl(this.styleObj.paddingLeft),
      padding: new FormControl(this.styleObj.padding)
      }
    )
  }

  enterChanges(funcType, payload){
    switch (funcType) {
      case 'button':
        this.store.dispatch(StylesActions.setBtnStyle({payload}));
        break;
      case 'checkbox':
        this.store.dispatch(StylesActions.setCheckboxStyle({payload}));
        break;
      case 'label':
        this.store.dispatch(StylesActions.setLabelStyles({payload}));
        break;
      case 'input':
        this.store.dispatch(StylesActions.setInputStyle({payload}));
        break;
      case 'select':
        this.store.dispatch(StylesActions.setSelectStyle({payload}));
        break;
      case 'textarea':
        this.store.dispatch(StylesActions.setTextareaStyle({payload}));
        break;
    }
  }
}
