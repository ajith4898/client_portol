import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }


  public saveToken(Token: any) {
    window.sessionStorage.setItem('token',Token);
  }

  public getToken(): any {
    return  sessionStorage.getItem('token');
  }

  public saveTicketId(ticketid: any) {
    window.sessionStorage.setItem('ticketid',ticketid);
  }

  public getTicketId(): any {
    return  sessionStorage.getItem('ticketid');
  }

  
  public saveUserDetails(user: any) {
    window.sessionStorage.setItem('user',user);
  }

  public getUserDetails(): any {
    return  sessionStorage.getItem('user');
  }
}
