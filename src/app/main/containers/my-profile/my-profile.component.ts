import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent {
  userName = 'test';

  constructor(private authService: AuthService){}

  logout() {
    this.authService.logout();
  }
}
