import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaidsComponent } from './containers/raids/raids.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'raids', component: RaidsComponent},
]

@NgModule({
  declarations: [RaidsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class RaidsModule { }
