import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  form: FormGroup;
  isSubmited = false;
  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  }

  onSubmit() {
    const formData = {...this.form.value};
    console.log(formData);
    if(formData.email == 'smth@g' && formData.password == '123456'){
      this.isSubmited = !this.isSubmited;
      this.auth.login()
    }
  }
}
