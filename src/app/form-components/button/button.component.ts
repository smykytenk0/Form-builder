import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() set btnStyles(newStyles: {[key:string]:string}){
    this.styles = newStyles;
  }
  @Input() buttonName = 'Button';
  styles: {[key:string]:string};
  constructor() { }

  ngOnInit(): void {
  }

}
