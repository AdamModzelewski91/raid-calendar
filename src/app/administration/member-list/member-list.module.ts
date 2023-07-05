import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MemberListComponent } from "./containers/member-list/member-list.component";

const routes: Routes = [
  { path: '', component: MemberListComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  declarations: [
    MemberListComponent
  ],
  exports: [
    MemberListComponent
  ]
})
export class MemberListnModule{}