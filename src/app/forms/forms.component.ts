import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver, OnInit,
  TemplateRef, Type,
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
import {CustomComponent} from "../store/interfaces";



@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent  implements  AfterViewInit{
  @ViewChild('elemContainer', { read: ViewContainerRef }) entry:ViewContainerRef;
  dragArray = [];
  dropArray = [];
  components = [];

  ngAfterViewInit(): void {
    this.createElement<CheckboxComponent>(CheckboxComponent);
    this.createElement<ButtonComponent>(ButtonComponent);
    this.createElement<InputComponent>(InputComponent);
    this.createElement<LabelComponent>(LabelComponent);
    this.createElement<SelectComponent>(SelectComponent);
    this.createElement<TextareaComponent>(TextareaComponent);
    }

  constructor(private resolver:ComponentFactoryResolver){}

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

  createElement<T>(component: Type<T>){
    const factory = this.resolver.resolveComponentFactory(component);
    this.components.push(factory);
    this.entry.createComponent(factory);
  }
}
