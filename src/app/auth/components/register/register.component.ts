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
    email: ['', [
      Validators.required, 
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), 
    ]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    guildMaster: true,
    guildName: ['', [Validators.required]]
  });

  showPassword = false;

  emailAlreadyExist = false;

  constructor(
    private fb: NonNullableFormBuilder,
    private authService: AuthService,
  ) {
    console.log(this.registerFormControl.email)
  }

  get registerFormControl() {
    return this.form.controls;
  }

  onSubmit() {
    if (!this.form.valid) return;

    this.authService.register(this.form.getRawValue())
      .then((user)=> {
        
      })
      .catch(() => {
      this.emailAlreadyExist = true;
        const timer = setTimeout(()=> {
          this.emailAlreadyExist = false;
          this.form.get('email')?.setValue('');
          clearTimeout(timer);
        }, 3000);
      })
  }

}
