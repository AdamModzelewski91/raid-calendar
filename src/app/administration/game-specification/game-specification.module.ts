import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GameSpecificationComponent } from "./containers/game-specification/game-specification.component";
import { NewFieldComponent } from './components/new-field/new-field.component';
import { ReactiveFormsModule } from "@angular/forms";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { CommonModule } from "@angular/common";

const routes: Routes = [
  { path: '',  component: GameSpecificationComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    DragDropModule,
  ],
  declarations: [
    GameSpecificationComponent,
    NewFieldComponent
  ],
  exports: [
    GameSpecificationComponent
  ]
})
export class GameSpecificationModule{}
