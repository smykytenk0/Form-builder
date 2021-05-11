import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Store } from "@ngrx/store";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  form: FormGroup;
  formData: object;

  constructor(private auth: AuthService, private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    })

  }

  onSubmit() {
    this.formData = this.form.value;
    this.auth.register(this.formData).subscribe();
    this.router.navigate(['/forms'])
  }

}
