import { Component, Input } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, ActivationEnd, ActivatedRouteSnapshot, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  public shown = {
    isShownsidenav: false,
  };
  constructor(private router: Router,private activeRoute: ActivatedRoute) {


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
            if (event.url === "/signup" ) {
              this.shown.isShownsidenav = false;
              // // this.localstroage.removeitem()
              // this.local.loignfalse();
              // this.login.islogged=false

        
            } else if (event.url === '/signin') {
              this.shown.isShownsidenav = false;
              // this.localstroage.removeitem()
              // this.local.loignfalse()
              // this.login.islogged=false

        
            }else if (event.url === '/') {
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


  public href: string = ""
  public isLoggedIn: any



  isSideNavCollapsed = false;
  screenWidth = 0;
  url: any;
  urls: any;
  routeData: Observable<ActivatedRoute | null> | undefined;
  pageTitle: any;




  

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }


}
