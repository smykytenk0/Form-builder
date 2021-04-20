import {Component, Input, OnInit} from '@angular/core';
import {initialState} from "../../store/styles.reducer";

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  @Input() labelStyles=initialState.labelStyles;
  @Input() label = 'Label';

  constructor() { }

  ngOnInit(): void {
  }

}
