import {CdkPortalOutlet, DomPortal} from '@angular/cdk/portal';
import {
  AfterViewInit,
  Component,
  ViewChild,
  ElementRef, OnInit
} from '@angular/core';
import { CdkDragDrop, copyArrayItem, moveItemInArray } from "@angular/cdk/drag-drop";
import { getStylesBy
} from "../store/styles.reducer";
import { FormGroup } from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { enumTOArray } from "../store/helper";
import { ElementType } from "../store/interfaces";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements AfterViewInit, OnInit {
  @ViewChild('accordionContainer', {read: CdkPortalOutlet}) virtualPortalOutletAccordion: CdkPortalOutlet;
  @ViewChild('builderContainer', {read: CdkPortalOutlet}) virtualPortalOutletBuilder: CdkPortalOutlet;
  @ViewChild('elementsContainer', {read: CdkPortalOutlet}) virtualPortalOutletElements: CdkPortalOutlet;
  @ViewChild('accordionComp') accordionComp: ElementRef;
  @ViewChild('builderComp') builderComp: ElementRef;
  @ViewChild('elementsComp') elementsComp: ElementRef;

  getStylesByType(type: string) {
    return this.store.pipe(select(getStylesBy(type)));
  }

  keys = [];

  dragArray = enumTOArray<string>(ElementType);
  dropArray = [];
  deleteElementIndex: number;

  domPortal: DomPortal<any>;
  form: FormGroup;

  constructor(private store: Store) {

  }

  ngOnInit(): void {
    this.form = new FormGroup({});
  }

  ngAfterViewInit(): void {
    this.domPortal = new DomPortal(this.accordionComp);
    this.virtualPortalOutletAccordion.attach(this.domPortal);

    this.domPortal = new DomPortal(this.builderComp);
    this.virtualPortalOutletBuilder.attach(this.domPortal);

    this.domPortal = new DomPortal(this.elementsComp);
    this.virtualPortalOutletElements.attach(this.domPortal);

  }


  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      this.dropArray[event.currentIndex] = this.dropArray[event.currentIndex] + '_' + this.dropArray.length;
    }
  }

  deleteElement(element){
    this.deleteElementIndex = this.dropArray.indexOf(element);
    this.dropArray.splice(this.deleteElementIndex, 1);
  }
}

