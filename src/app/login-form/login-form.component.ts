import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../auth.service";
import {Store} from "@ngrx/store";
import {AuthActions} from "../store/auth.actions";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  form: FormGroup;
  isSubmited = false;
  formData;
  constructor(private auth: AuthService, private store: Store) {
  }

  ngOnInit() {
    this.initForm()
  }

  initForm(){
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  }

  onSubmit() {
    this.formData = this.form.value;
    console.log(this.formData);
    if(this.formData.email == 'smth@g' && this.formData.password == "123456"){
      this.auth.login();
      this.isSubmited = true;
    }
  }
}
