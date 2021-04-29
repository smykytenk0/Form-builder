import {Component, Input, OnInit} from '@angular/core';
import {ComponentItem} from "../../store/component-item";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements ComponentItem {
  @Input() styles: { [p: string]: string };
  @Input() placeholder = 'Text';
}
