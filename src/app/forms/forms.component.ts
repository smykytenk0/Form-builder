import {CdkPortalOutlet, DomPortal} from '@angular/cdk/portal';
import {
  AfterViewInit,
  Component,
  ViewChild,
  ElementRef, OnInit
} from '@angular/core';
import {CdkDragDrop, copyArrayItem, moveItemInArray} from "@angular/cdk/drag-drop";
import {
  getBtnStylesSelector,
  getCheckboxStylesSelector, getGeneralStylesSelector,
  getInputStylesSelector, getLabelStylesSelector, getSelectStylesSelector, getTextareaStylesSelector
} from "../store/styles.reducer";
import {FormGroup} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {Observable } from "rxjs";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements AfterViewInit, OnInit{
  @ViewChild('accordionContainer', {read: CdkPortalOutlet}) virtualPortalOutlet1: CdkPortalOutlet;
  @ViewChild('builderContainer', { read: CdkPortalOutlet }) virtualPortalOutlet2: CdkPortalOutlet;
  @ViewChild('elementsContainer', {read: CdkPortalOutlet}) virtualPortalOutlet3: CdkPortalOutlet;
  @ViewChild('comp1') comp1:ElementRef;
  @ViewChild('comp2') comp2:ElementRef;
  @ViewChild('comp3') comp3:ElementRef;
  generalStyle$: Observable<{[key:string]:string}>;
  btnStyles$: Observable<{[key:string]:string}>;
  checkboxStyles$: Observable<{[key:string]:string}>;
  inputStyles$: Observable<{[key:string]:string}>;
  labelStyles$: Observable<{[key:string]:string}>;
  selectStyles$: Observable<{[key:string]:string}>;
  textareaStyles$: Observable<{[key:string]:string}>;
  keys =[];

  dragArray = ['button', 'checkbox', 'input', 'label', 'select', 'textarea'];
  dropArray = [];
  styleType = {};

  domPortal:DomPortal<any>;
  form: FormGroup;

  constructor(private store: Store) {
    this.btnStyles$ = this.store.pipe(select(getBtnStylesSelector));
    this.checkboxStyles$ = this.store.pipe(select(getCheckboxStylesSelector));
    this.generalStyle$ = this.store.pipe(select(getGeneralStylesSelector));
    this.inputStyles$ = this.store.pipe(select(getInputStylesSelector),tap(console.log));
    this.labelStyles$ = this.store.pipe(select(getLabelStylesSelector));
    this.selectStyles$ = this.store.pipe(select(getSelectStylesSelector));
    this.textareaStyles$ = this.store.pipe(select(getTextareaStylesSelector));
  }

  ngOnInit(): void {
    this.form = new FormGroup({});
  }

  ngAfterViewInit(): void {
    this.domPortal = new DomPortal(this.comp1);
    this.virtualPortalOutlet1.attach(this.domPortal);

    this.domPortal = new DomPortal(this.comp2);
    this.virtualPortalOutlet2.attach(this.domPortal);

    this.domPortal = new DomPortal(this.comp3);
    this.virtualPortalOutlet3.attach(this.domPortal);

  }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      this.dropArray[event.currentIndex] = this.dropArray[event.currentIndex] + '_' + this.dropArray.length;

      switch (event.container.data[event.currentIndex].slice(0, -2)) {
        case 'button':
          this.styleType = this.store.pipe(select(getBtnStylesSelector));
          break;
        case 'checkbox':
          this.styleType = this.store.pipe(select(getCheckboxStylesSelector));
          break;
        case 'input':
          this.styleType = this.store.pipe(select(getInputStylesSelector));
          break;
        case 'label':
          this.styleType = this.store.pipe(select(getLabelStylesSelector));
          break;
        case 'select':
          this.styleType = this.store.pipe(select(getSelectStylesSelector));
          break;
        case 'textarea':
          this.styleType = this.store.pipe(select(getTextareaStylesSelector));
          break
      }
      this.keys = Object.keys(this.styleType);
    }
  }
}


