import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { StylesActions } from "'./store/styles.actions';

@Component({
  selector: 'app-acordion-block',
  templateUrl: './accordion-block.component.html',
  styleUrls: ['./accordion-block.component.scss']
})
export class AccordionBlockComponent implements OnInit {
  @Input() title: string;
  @Input() styles: { [key: string]: string };
  keys: string[];

  form: FormGroup = new FormGroup({});
  activeItem = false;
  showStyles = false;
  elementForm: FormGroup;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.keys = Object.keys(this.styles);
    const group = this.keys.reduce((p, c) => {
      return {...p, [c]: new FormControl(this.styles[c])}
    }, {});
    this.elementForm = new FormGroup(group);
  }

  enterChanges(payload: { [key: string]: string }) {
    console.log(payload);
    console.log(this.title);
    this.store.dispatch(StylesActions.setStylesByType({payload,element: this.title}));
  }
}
