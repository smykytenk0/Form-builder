import { Component, Input } from '@angular/core';

import { ComponentItem } from '../../../store/component-item';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent implements ComponentItem {
  @Input() styles: { [p: string]: string };
  @Input() buttonName = 'Button';
}
