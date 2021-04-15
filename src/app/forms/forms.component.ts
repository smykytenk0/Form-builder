import {CdkPortalOutlet, ComponentPortal, DomPortal, Portal, TemplatePortal} from '@angular/cdk/portal';
import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewContainerRef,
  ElementRef
} from '@angular/core';
import {AccordionSectionComponent} from "../accordion-section/accordion-section.component";
import {CdkDragDrop, copyArrayItem, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements AfterViewInit{
  @ViewChild('accordionContainer', {read: CdkPortalOutlet}) virtualPortalOutlet1: CdkPortalOutlet;
  @ViewChild('builderContainer', { read: CdkPortalOutlet }) virtualPortalOutlet2: CdkPortalOutlet;
  @ViewChild('elementsContainer', {read: CdkPortalOutlet}) virtualPortalOutlet3: CdkPortalOutlet;
  @ViewChild('comp2') comp2:ElementRef;
  @ViewChild('comp3') comp3:ElementRef;

  dragArray = ['button', 'checkbox', 'input', 'label', 'select', 'textarea'];
  dropArray = [];

  domPortal:DomPortal<any>;
  componentPortal:ComponentPortal<any>;
  ngAfterViewInit(): void {
    this.componentPortal =new ComponentPortal(AccordionSectionComponent);
    this.virtualPortalOutlet1.attach(this.componentPortal);

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
        event.currentIndex)
    }
  }

}


