import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface LinkItem{
  title : string,
  link : string,
  icon : string,
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,NgFor],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  linkItems : LinkItem[] = [
    {
      title : 'Dashboard',
      link : '/',
      icon : 'fa fa-desktop'
    },
    {
      title : 'Schedule',
      link : '/schedule',
      icon : 'fa fa-calendar-alt'
    },
    {
      title : 'Teacher',
      link : '/teacher',
      icon : 'fa fa-chalkboard-teacher'
    },
    {
      title : 'Lesson',
      link : '/lesson',
      icon : 'fa fa-book'
    },
    {
      title : 'request',
      link : '/request',
      icon : 'fa fa-check-square'
    },
    {
      title : 'Room',
      link : '/room',
      icon : 'fa fa-store-alt'
    }
  ]
}
