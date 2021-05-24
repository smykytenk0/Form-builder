import { Component, Input } from '@angular/core';
import { ComponentItem } from '../../store/component-item';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements ComponentItem {
  @Input() styles: { [p: string]: string };
  @Input() select = 'select';
  @Input() options = ['option1', 'option2'];

}
