import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorServiceService {
  constructor() { }

  // Observable source
  private errorServiceView = new Subject<boolean>();

  // Observerble streams
  errorServiceView$ = this.errorServiceView.asObservable();

  // Observerble commands
  onShowErrorView(){
    this.errorServiceView.next(true);
  }
  onHideErrorView(){
    this.errorServiceView.next(false);
  }

}
