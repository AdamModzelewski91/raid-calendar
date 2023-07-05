import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  activeLinks= [
    {
      name: "Administration",
      visible: true,
      path: "administration",
      expanded: true,
      submenus: [
        {
          name: 'Raid settings',
          path: 'raid-settings',
          visible: true,
        },
        {
          name: 'Game specification',
          path: 'game-specification',
          visible: true,
        },
        {
          name: 'Member list',
          path: 'member-list',
          visible: true,
        },
      ]
    }
  ]
}
