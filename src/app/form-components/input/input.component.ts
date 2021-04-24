import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() set inputStyles(newStyles: {[key:string]:string}){
    this.styles = newStyles;
  }
  @Input() placeholder = 'Text';
  styles: {[key:string]:string};

  constructor() { }

  ngOnInit(): void {
  }

}
