import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guard/auth.guard';

const routes: Routes = [
  { path: 'progress', children: [
    { path: 'individual', loadChildren: () => import('./individual/individual.module').then((x) => x.IndividualModule) },
    { path: 'global', loadChildren: () => import('./global/global.module').then((x) => x.GlobalModule) },
  ], canActivate: [ AuthGuard ]}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ProgressModule { }
