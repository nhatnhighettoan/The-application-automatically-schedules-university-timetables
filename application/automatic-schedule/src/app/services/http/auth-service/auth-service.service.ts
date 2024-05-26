import { Injectable } from '@angular/core';
import { BaseHttpService } from '../base-http/base-http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService extends BaseHttpService {
  private url = 'account'
  constructor() {
    super();
  }

  login(data : any){
    return this.get(this.url)
  }

  register(data : any){
   return this.get(this.url)
  }
}
