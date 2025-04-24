import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient} from '@angular/common/http';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthserveService {

  private baseurl:any;


  constructor(private http : HttpClient, private localstroage:LocalstorageService
    ) {
    this.baseurl=environment.apiUrl;
    }
   
    
    public signup(obj:any) {
      let url = this.baseurl + '/api/auth/signup/';
      return this.http.post(url, obj,{
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*',
        }
      });
    
    }

    public sendotp(obj:any) {
      let url = this.baseurl + '/api/auth/sendotp/';
      return this.http.post(url, obj,{
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*',
        }
      });
    
    }
    

    public signin(obj:any) {
      let url = this.baseurl + '/api/auth/signin/';
      return this.http.post(url, obj,{
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*',
        }
      });
    
    }

    public profile() {
      var token = this.localstroage.getToken();
      let url = this.baseurl + '/api/auth/profile/';
      return this.http.get(url,{
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*',
          'Authorization': `Bearer ${token}`
        }
      });
    
    }

    public getapikey() {
      var token = this.localstroage.getToken();
      let url = this.baseurl + '/api/apikeys/';
      return this.http.get(url,{
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*',
          'Authorization': `Bearer ${token}`
        }
      });
    
    }

    public addkeys() {
      var token = this.localstroage.getToken();
      let url = this.baseurl+'/api/apikeys';
      return this.http.post(url,{},{
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*',
          'Authorization': `Bearer ${token}`
        }
      });
    
    }


         
    public updateapikey(obj:any,id:any) {
      var token = this.localstroage.getToken();
      let url = this.baseurl + `/api/apikeys/${id}/`;
      return this.http.put(url, obj, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*',
          'Authorization': `Bearer ${token}`
        }
      });
    
    }


    public deleteapikey(id:any) {
      var token = this.localstroage.getToken();
      let url = this.baseurl + `/api/apikeys/${id}/`;
      return this.http.delete(url, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*',
          'Authorization': `Bearer ${token}`
        }
      });
    
    }



    public getTickets() {
      var token = this.localstroage.getToken();
      let url = this.baseurl + '/api/tickets/';
      return this.http.get(url,{
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*',
          'Authorization': `Bearer ${token}`
        }
      });
    
    }


    public CreateTicket(files: any) {
      var token = this.localstroage.getToken();
      let url = this.baseurl + '/api/tickets/';
      return this.http.post(url, files ,{
        headers: {
              'Authorization': `Bearer ${token}`,
             }
      });
    };

    public GetTicketDetailsbyid(id:any) {
      var token = this.localstroage.getToken();
      let url = this.baseurl + `/api/tickets/${id}/comments/`;
      return this.http.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*',
          'Authorization': `Bearer ${token}`
        }
      });
    }

    public GetTicketInfobyid(id:any) {
      var token = this.localstroage.getToken();
      let url = this.baseurl + `/api/tickets/${id}`;
      return this.http.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*',
          'Authorization': `Bearer ${token}`
        }
      });
    }


    public TicketCmt(files: any,id:any) {
      var token = this.localstroage.getToken();
      let url = this.baseurl +`/api/tickets/${id}/comments/`;
      return this.http.post(url, files ,{
        headers: {
              'Authorization': `Bearer ${token}`,
             }
      });
    };

}
