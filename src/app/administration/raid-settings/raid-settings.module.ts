import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { RaidSettingsComponent } from "./containers/raid-settings/raid-settings.component";
import { RaidFormComponent } from './components/raid-form/raid-form.component';
import { RaidingTimeComponent } from './components/raiding-time/raiding-time.component';

const routes: Routes = [
  { path: '', pathMatch: "full", component: RaidSettingsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
  declarations: [
    RaidSettingsComponent,
    RaidFormComponent,
    RaidingTimeComponent,

  ],
  exports: [
    RaidSettingsComponent,
  ],
})
export class RaidSettingsModule{}
