import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './main/containers/nav/nav.component';
import { AdministrationModule } from './administration/administration.module';
import { FirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/guard/auth.guard';

const routes: Routes = [
  { path: 'administration', component: AdministrationModule }
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AdministrationModule,
    AuthModule,
    RouterModule.forRoot(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    FirestoreModule,
    provideAuth(() => getAuth()),
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
