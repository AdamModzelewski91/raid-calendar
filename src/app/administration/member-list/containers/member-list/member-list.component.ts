import { Component } from '@angular/core';
import { MemberListService } from '../../services/member-list.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent {
  memberList$ = this.memberListService.getMembersList();

  constructor(private memberListService: MemberListService){}


}
