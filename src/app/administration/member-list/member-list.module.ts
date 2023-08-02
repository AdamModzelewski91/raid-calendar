import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MemberListComponent } from "./containers/member-list/member-list.component";
import { MemberTabelListComponent } from './components/member-tabel-list/member-tabel-list.component';
import { MemberListService } from "./services/member-list.service";
import { CommonModule } from "@angular/common";

const routes: Routes = [
  { path: '', component: MemberListComponent },
];

@NgModule({
  declarations: [
    MemberListComponent,
    MemberTabelListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    MemberListService,
  ]
})
export class MemberListnModule{}
