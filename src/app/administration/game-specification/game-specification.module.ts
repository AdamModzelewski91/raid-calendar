import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GameSpecificationComponent } from "./containers/game-specification/game-specification.component";

const routes: Routes = [
  { path: '',  component: GameSpecificationComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  declarations: [
    GameSpecificationComponent
  ],
  exports: [
    GameSpecificationComponent
  ]
})
export class GameSpecificationModule{}