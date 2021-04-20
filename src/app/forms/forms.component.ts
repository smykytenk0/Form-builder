import {CdkPortalOutlet, ComponentPortal, DomPortal, Portal, TemplatePortal} from '@angular/cdk/portal';
import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewContainerRef,
  ElementRef, Input, OnInit
} from '@angular/core';
import {CdkDragDrop, copyArrayItem, moveItemInArray} from "@angular/cdk/drag-drop";
import {initialState} from "../store/styles.reducer";
import {FormGroup} from "@angular/forms";

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
  @Input() generalStyle = initialState.generalStyle;

  dragArray = ['button', 'checkbox', 'input', 'label', 'select', 'textarea'];
  dropArray = [];
  styleType = {};
  styleArray =[];

  domPortal:DomPortal<any>;
  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({});
  }
  ngAfterViewInit(): void {
    this.domPortal = new DomPortal(this.comp1);
    this.virtualPortalOutlet1.attach(this.domPortal);

    this.domPortal =  new DomPortal(this.comp2);
    this.virtualPortalOutlet2.attach(this.domPortal);

    this.domPortal =  new DomPortal(this.comp3);
    this.virtualPortalOutlet3.attach(this.domPortal);
    console.log(this.dropArray)
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      this.dropArray[event.currentIndex] = this.dropArray[event.currentIndex] + '_' + event.currentIndex;

      switch (event.container.data[event.currentIndex].split('_')[0]) {
        case 'button':
          this.styleType = initialState.btnStyles;
          break;
        case 'checkbox':
          this.styleType = initialState.checkboxStyles;
          break;
        case 'input':
          this.styleType = initialState.inputStyles;
          break;
        case 'label':
          this.styleType = initialState.labelStyles;
          break;
        case 'select':
          this.styleType = initialState.selectStyles;
          break;
        case 'textarea':
          this.styleType = initialState.textareaStyles;
          break
      }
    }
    this.styleArray.push(Object.keys(this.styleType));
    console.log(this.styleArray);
  }
}


