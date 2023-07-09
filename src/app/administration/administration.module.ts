import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/guard/auth.guard";


const routes: Routes = [
  { path: 'administration', children: [
    { path: 'game-specification', loadChildren: () => import('./game-specification/game-specification.module').then(x => x.GameSpecificationModule), canActivate: [AuthGuard] },
    { path: 'member-list', loadChildren: () => import('./member-list/member-list.module').then(x => x.MemberListnModule), canActivate: [AuthGuard] },
    { path: 'raid-settings', loadChildren: () => import('./raid-settings/raid-settings.module').then(x => x.RaidSettingsModule), canActivate: [AuthGuard] },
    { path: '', pathMatch: 'full', redirectTo: 'member-list'},
    { path: '**', redirectTo: 'member-list'},
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class AdministrationModule{}
