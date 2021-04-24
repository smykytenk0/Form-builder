import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() set checkboxStyles(newStyles: {[key: string]: string}){
    this.styles = newStyles;
  }
  @Input() label = 'Label';
  styles: {[key:string]:string};

  constructor() { }

  ngOnInit(): void {
  }

}
