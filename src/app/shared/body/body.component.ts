import { Component, Input } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  public shown = {
    isShownsidenav: false,
  };
  constructor(private router: Router,     private activeRoute: ActivatedRoute) {


    // if(this.login.islogged !== false){
    //   this.shown.isShownsidenav=true;
    //   console.log('function called');
      
    //  }else{
    //   this.shown.isShownsidenav=false;
    //  }
    
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd) )
      .subscribe(
        (event:any) => {
          
console.log('event',event);

          if (event) {
            // if(event.url === '/homedashboard'){
            //   this.shown.isShownsidenav = true
            //   this.login.islogged=true

            // }else
            if (event.url === "/signup") {
              this.shown.isShownsidenav = false;
              // // this.localstroage.removeitem()
              // this.local.loignfalse();
              // this.login.islogged=false

        
            } else if (event.url === '/') {
              this.shown.isShownsidenav = false;
              // this.localstroage.removeitem()
              // this.local.loignfalse()
              // this.login.islogged=false

        
            }  
             else if (event.url === '') {
              this.shown.isShownsidenav = false;
              // this.localstroage.removeitem()
              // this.local.loignfalse()
              // this.login.islogged=false

        
            }else {
              this.shown.isShownsidenav = true;
              // this.login.islogged=true

            }
        
            // if(event.url === '/homedashboard'){
              
            // }



          }

        }

      )

  } 

    
  getBodyClass(): string {
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen'
    }
    return styleClass;
  }

}
