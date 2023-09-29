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
    email: ['', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
    ]],
    password: ['', Validators.required],
  })

  emailAlreadyExist = false;

  constructor(private authService: AuthService, private fb: NonNullableFormBuilder) {}

  get loginControls() {
    return this.form.controls;
  }

  login() {
    if(this.form.valid) {
      const {email, password} = this.form.getRawValue();
      this.authService.login(email, password)
        .catch(()=> {
          this.emailAlreadyExist = true;
          const timer = setTimeout(()=> {
            this.emailAlreadyExist = false;
            clearTimeout(timer);
          }, 3000);
        })
    }
  }

}
