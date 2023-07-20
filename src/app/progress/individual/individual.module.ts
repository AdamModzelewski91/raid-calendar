import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndividualComponent } from './individual.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch:'full', component: IndividualComponent },
]

@NgModule({
  declarations: [IndividualComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class IndividualModule { }
