import { Component } from '@angular/core';
import { ErrorServiceService } from '../../services/error/error-service.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-error-view',
  standalone: true,
  imports: [NgIf],
  templateUrl: './error-view.component.html',
  styleUrl: './error-view.component.css'
})
export class ErrorViewComponent {
  display:boolean = false

  constructor( 
    private errorServiceService:ErrorServiceService
  ){
    this.onListernerErrorServiceService()
  }

  onListernerErrorServiceService(){
    this.errorServiceService.errorServiceView$.subscribe(
      {
        next:(next)=>{
          if(next){
            this.display = true 
          }else{
            this.display = false
          }
        }
      }
    )
  }
}
