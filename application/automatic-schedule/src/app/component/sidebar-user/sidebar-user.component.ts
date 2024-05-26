import { Component } from '@angular/core';
import { EnvUrl } from '../../env-url';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgFor } from '@angular/common';

interface LinkItem{
  title : string,
  link : string,
  icon : string,
}

@Component({
  selector: 'app-sidebar-user',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,NgFor],
  templateUrl: './sidebar-user.component.html',
  styleUrl: './sidebar-user.component.css'
})
export class SidebarUserComponent {
  envUrl = EnvUrl
  linkItems : LinkItem[] = [
    {
      title : 'Dashboard',
      link : '/app/user',
      icon : 'fa fa-desktop'
    },
    {
      title : 'Schedule',
      link : this.envUrl.schedule_user,
      icon : 'fa fa-calendar-alt'
    },
    {
      title : 'request',
      link : this.envUrl.request_user,
      icon : 'fa fa-check-square'
    },
  ]
}
