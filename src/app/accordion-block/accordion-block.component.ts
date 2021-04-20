import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {initialState} from "../store/styles.reducer";

@Component({
  selector: 'app-acordion-block',
  templateUrl: './accordion-block.component.html',
  styleUrls: ['./accordion-block.component.scss']
})
export class AccordionBlockComponent implements OnInit {
  @Input() title = 'Title';
  @Input() keys = [];

  form:FormGroup=new FormGroup({});
  activeItem = false;
  showStyles = false;
  constructor() { }

  ngOnInit(): void {
  }

}
