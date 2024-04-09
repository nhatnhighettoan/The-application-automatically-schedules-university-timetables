import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarUserComponent } from '../sidebar-user/sidebar-user.component';

@Component({
  selector: 'app-user-template',
  standalone: true,
  imports: [RouterOutlet,SidebarUserComponent,HeaderComponent],
  templateUrl: './user-template.component.html',
  styleUrl: './user-template.component.css',
  host: {ngSkipHydration: 'true'},
})
export class UserTemplateComponent {

}
