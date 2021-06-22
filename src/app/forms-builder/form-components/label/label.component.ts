import { Component, Input } from '@angular/core';
import { ComponentItem } from "../../../store/component-item";

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements ComponentItem {
  @Input() styles: { [p: string]: string };
  @Input() label = 'Label';


}
