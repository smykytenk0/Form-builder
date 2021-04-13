import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {CdkDragDrop, copyArrayItem, moveItemInArray} from "@angular/cdk/drag-drop";
import {ButtonComponent} from "../elements/button.component";
import {CheckboxComponent} from "../elements/checkbox.component";
import {InputComponent} from "../elements/input.component";
import {LabelComponent} from "../elements/label.component";
import {SelectComponent} from "../elements/select.component";
import {TextareaComponent} from "../elements/textarea.component";



@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent  {
  @ViewChild('elemContainer', { read: ViewContainerRef }) elemContainer;
  dragArray = ['hello', 'my', 'name', 'is', 'Sasha'];
  dropArray = [];

  constructor(private ComponentFactoryResolver:ComponentFactoryResolver){}

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
