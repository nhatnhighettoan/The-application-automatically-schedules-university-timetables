import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [NgIf],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
  @Input() popupTitle = ''
  openPopup = false

  onOpenPopup(){
    this.openPopup = true
    console.log("hello");
    
  }

  onClosePopup(){
    this.openPopup = false
  }
}
