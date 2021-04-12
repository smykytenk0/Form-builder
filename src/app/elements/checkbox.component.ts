import {Component, OnInit} from "@angular/core";

@Component({
  selector:'app-checkbox',
  template: `<div>
    <input type="checkbox" id="checkbox">
    <label for="checkbox">Checkbox</label>
  </div>`
})

export class CheckboxComponent implements OnInit{
  ngOnInit(): void {
  }
}
