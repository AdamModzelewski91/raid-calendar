import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

export interface RegisterUser {
  nick: string,
  email: string,
  password: string,
  guildMaster: boolean,
  guildName: string
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form = this.fb.group({
    nick: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    guildMaster: true,
    guildName: ['', [Validators.required]]
  });

  showPassword = false;

  constructor(
    private fb: NonNullableFormBuilder,
    private authService: AuthService,
  ) {}


  onSubmit() {
    if (this.form.valid) {
      this.authService.register(this.form.getRawValue());
    }
  }

}
