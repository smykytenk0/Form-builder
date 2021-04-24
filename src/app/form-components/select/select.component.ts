import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() set selectStyles(newStyles:{[key:string]:string}){
    this.styles = newStyles
  }
  @Input() select = 'select';
  @Input() options = ['option1', 'option2'];

  styles:{[key:string]:string};
  constructor() { }

  ngOnInit(): void {
  }

}
