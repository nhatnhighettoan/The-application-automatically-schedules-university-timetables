import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EnvUrl } from '../../env-url';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  host: {ngSkipHydration: 'true'},
})
export class HeaderComponent {
  showSubmenu = false
  goToNotification = EnvUrl.notification

  onShowSubmenu(){
    this.showSubmenu = true
  }

  onHideSubmenu(){
    this.showSubmenu = false
  }
}
