import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-member-tabel-list',
  templateUrl: './member-tabel-list.component.html',
  styleUrls: ['./member-tabel-list.component.scss']
})
export class MemberTabelListComponent {
  @Input() memberList!: any;
  constructor(){}
}
