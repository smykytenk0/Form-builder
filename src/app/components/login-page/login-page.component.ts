import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../store/index";
import {login} from "../../store/actions/login-page.actions";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private store:Store<AppState>
  ) { }

  ngOnInit(): void {}
  onSubmit(email: string, password: string){
    this.store.dispatch(login({email:email, password:password}));
  }
}
