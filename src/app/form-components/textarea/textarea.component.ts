import { Component, Input } from '@angular/core';
import { ComponentItem } from '../../store/component-item';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements ComponentItem {
  @Input() placeholder = 'some text here...';
  @Input() styles: { [p: string]: string };
}
