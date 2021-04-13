import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-acordion-block',
  templateUrl: './accordion-block.component.html',
  styleUrls: ['./accordion-block.component.scss']
})
export class AccordionBlockComponent implements OnInit {
  @Input() title;

  form:FormGroup=new FormGroup({
  });
  activeItem = false;
  showStyles = false;
  constructor() { }

  ngOnInit(): void {
  }

}
