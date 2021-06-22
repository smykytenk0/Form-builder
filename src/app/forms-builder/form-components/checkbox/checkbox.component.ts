import { Component, Input } from '@angular/core';
import { ComponentItem } from "../../../store/component-item";

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements ComponentItem {
  @Input() styles: { [p: string]: string };
  @Input() label = 'Label';
}
