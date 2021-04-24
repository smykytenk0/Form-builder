import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {
  @Input() set textareaStyles(newStyles:{[key:string]:string}){
    this.styles = newStyles
  }
  @Input() placeholder = 'some text here...';

  styles:{[key:string]:string};
  constructor() { }

  ngOnInit(): void {
  }

}
