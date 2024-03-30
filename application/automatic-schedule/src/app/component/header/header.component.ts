import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  host: {ngSkipHydration: 'true'},
})
export class HeaderComponent {
  showSubmenu = false

  onShowSubmenu(){
    this.showSubmenu = true
  }

  onHideSubmenu(){
    this.showSubmenu = false
  }
}
