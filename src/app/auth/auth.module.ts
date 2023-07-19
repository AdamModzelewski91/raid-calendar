import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./containers/auth/auth.component";
import { AuthService } from "./services/auth.service";
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
  { path: '', component: AuthComponent, children: [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
  ]}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent,
  ],
})

export class AuthModule{}
