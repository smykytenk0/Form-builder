import {CdkPortalOutlet, DomPortal} from '@angular/cdk/portal';
import {
  AfterViewInit,
  Component,
  ViewChild,
  ElementRef, OnInit
} from '@angular/core';
import {CdkDragDrop, copyArrayItem, moveItemInArray} from "@angular/cdk/drag-drop";
import {
  getStylesBy
} from "../store/styles.reducer";
import {FormGroup} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {enumTOArray} from "../store/helper";
import {ElementType} from "../store/interfaces";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements AfterViewInit, OnInit {
  @ViewChild('accordionContainer', {read: CdkPortalOutlet}) virtualPortalOutlet1: CdkPortalOutlet;
  @ViewChild('builderContainer', {read: CdkPortalOutlet}) virtualPortalOutlet2: CdkPortalOutlet;
  @ViewChild('elementsContainer', {read: CdkPortalOutlet}) virtualPortalOutlet3: CdkPortalOutlet;
  @ViewChild('comp1') comp1: ElementRef;
  @ViewChild('comp2') comp2: ElementRef;
  @ViewChild('comp3') comp3: ElementRef;

  getStylesByType(type: string) {
    return this.store.pipe(select(getStylesBy(type)));
  }

  keys = [];

  dragArray = enumTOArray<string>(ElementType);
  dropArray = [];
  styleType = {};

  domPortal: DomPortal<any>;
  form: FormGroup;

  constructor(private store: Store) {
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
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      console.log('type');
      console.log(this.dropArray[event.currentIndex]);
      this.dropArray[event.currentIndex] = this.dropArray[event.currentIndex] + '_' + this.dropArray.length;
      const name = this.dropArray[event.currentIndex];
      console.log(name);
    }
  }
}


