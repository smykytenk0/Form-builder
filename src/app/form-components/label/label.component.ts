import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  @Input() set labelStyles (newStyles:{[key:string]:string}){
    this.styles = newStyles
  }
  @Input() label = 'Label';

  styles: {[key:string]:string};

  constructor() { }

  ngOnInit(): void {
  }

}
