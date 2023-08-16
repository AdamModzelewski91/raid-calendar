import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AdministrationModule } from './administration/administration.module';
import { FirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/guard/auth.guard';
import { MainModule } from './main/main.module';
import { CommonModule } from '@angular/common';
import { RaidsModule } from './raids/raids.module';

import { ProgressModule } from './progress/progress.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: '**', redirectTo: 'dashboard'},

]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AdministrationModule,
    AuthModule,
    MainModule,
    RaidsModule,
    ProgressModule,
    RouterModule.forRoot(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    FirestoreModule,
    provideAuth(() => getAuth()),
    BrowserAnimationsModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }