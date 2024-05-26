import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { ErrorViewComponent } from '../error-view/error-view.component';
import { ErrorServiceService } from '../../services/error/error-service.service';

@Component({
  selector: 'app-dashboard-template',
  standalone: true,
  imports: [RouterOutlet,SidebarComponent,HeaderComponent,ErrorViewComponent],
  templateUrl: './dashboard-template.component.html',
  styleUrl: './dashboard-template.component.css',
  host: {ngSkipHydration: 'true'},
})
export class DashboardTemplateComponent {
  constructor(
    private errorServiceService:ErrorServiceService
  ){
    // setTimeout(()=>{
    //   console.log('timeout');
    //   // this.errorServiceService.onShowErrorView()
    // },100)
  }
}
