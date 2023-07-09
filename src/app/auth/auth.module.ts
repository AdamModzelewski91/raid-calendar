import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./components/auth/auth.component";
import { AuthService } from "./services/auth.service";

const routes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'register', component: AuthComponent },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [
    AuthService,
  ]
})

export class AuthModule{}