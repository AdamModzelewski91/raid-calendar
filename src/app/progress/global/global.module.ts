import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalComponent } from './global.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch:'full', component: GlobalComponent },
]

@NgModule({
  declarations: [ GlobalComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class GlobalModule { }
