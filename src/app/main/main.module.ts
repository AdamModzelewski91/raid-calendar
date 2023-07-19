import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './containers/nav/nav.component';
import { AuthGuard } from '../auth/guard/auth.guard';
import { MyProfileComponent } from './containers/my-profile/my-profile.component';
import { AddCharacterComponent } from './containers/my-profile/add-character/add-character.component';
import { CharacterListComponent } from './containers/my-profile/character-list/character-list.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { UserPanelComponent } from './containers/dashboard/user-panel/user-panel.component';
import { GuildPanelComponent } from './containers/dashboard/guild-panel/guild-panel.component';

const routes: Routes = [
  { path: 'add-character', component: AddCharacterComponent},
  { path: 'character-list', component: CharacterListComponent},
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: 'user-panel', component: UserPanelComponent },
    { path: 'guild-panel', component: GuildPanelComponent },
    { path: '', pathMatch: 'full', redirectTo: 'user-panel'}
  ]},
]

@NgModule({
  declarations: [
    NavComponent,
    MyProfileComponent,
    AddCharacterComponent,
    CharacterListComponent,
    DashboardComponent,
    UserPanelComponent,
    GuildPanelComponent
  ],
  exports: [NavComponent, MyProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [AuthGuard]
})
export class MainModule { }
