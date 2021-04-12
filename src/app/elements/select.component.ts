import {Component, OnInit} from "@angular/core";

@Component({
  selector:'app-input',
  template: `<select>
    <option>Option 1</option>
    <option>Option 2</option>
  </select>`
})

export class SelectComponent implements OnInit{
  ngOnInit(): void {
  }
}
