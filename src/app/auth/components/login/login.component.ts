import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  constructor(private authService: AuthService, private fb: NonNullableFormBuilder) {}

  login() {
    if(this.form.valid) {
      const {email, password} = this.form.getRawValue();
      this.authService.login(email, password)
    }
  }

}
