import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { activeLinksMaster, activeLinksMember } from './active-links.config';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  activeLinks = activeLinksMember;

  currentUser$ =  this.authService.currentUser$.subscribe((val) => {
    if (val?.guildMaster) {
      this.activeLinks = activeLinksMaster;
    }
  })

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getCurrentUser();
  }
}
