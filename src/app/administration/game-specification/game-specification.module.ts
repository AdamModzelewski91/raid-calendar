import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GameSpecificationComponent } from "./containers/game-specification/game-specification.component";
import { NewFieldComponent } from './components/new-field/new-field.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { CommonModule } from "@angular/common";
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import { RaidSettingsService } from "../raid-settings/service/raid-service.service";

const routes: Routes = [
  { path: '',  component: GameSpecificationComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    DragDropModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonToggleModule,
    MatCardModule,
  ],
  declarations: [
    GameSpecificationComponent,
    NewFieldComponent
  ],
  exports: [
    GameSpecificationComponent
  ],
  providers: [
    RaidSettingsService,
  ]
})
export class GameSpecificationModule{}
