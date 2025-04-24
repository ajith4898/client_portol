import { Component, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';
// import { LocalstorageService } from 'src/service/localstorage.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('0ms',
          style({opacity: 1})
        )
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('0ms',
          style({opacity: 0})
        )
      ])
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms', 
          keyframes([
            style({transform: 'rotate(0deg)', offset: '0'}),
            style({transform: 'rotate(2turn)', offset: '1'})
          ])
        )
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {

  openSidebar: boolean = true;
  menuList:any;
 




//   menuList=[
//     {
//         "menu_name": "Dashboard",
//     },
//     {
//       "menu_name": "Documents",
//   },  {
//     "menu_name": "Audit Plan",
// },  {
//   "menu_name": "Red Tag",
// },  {
//   "menu_name": "Organisation Chart",
// },{
//   "menu_name": "Master Dashboard",
// }
// ]



  constructor(public router:Router) { }


   
  @Output() onToggleSideNav: EventEmitter<any> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;

  
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768 ) {
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

  ngOnInit() {

    this.screenWidth = window.innerWidth;

    // if(this.local.getMenu().length !== 0 || null){
    //   this.menuList = JSON.parse(this.local.getMenu());

    // }

   
    console.log('menuList',this.menuList);

  }

  showSubmenu(itemEl: HTMLElement) {
    itemEl.classList.toggle("showMenu");
  }


  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    // this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }
 
  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }


  // isLinkActive(routeLink: string): boolean {
  //   return this.router.isActive(routeLink, true);
  // }
  isLinkActive(routeLink: string | undefined): boolean {
  //  console.log("routeLink",routeLink)
    if (routeLink === undefined) {
      return false; // or handle the case appropriately
    }
    return this.router.isActive(routeLink, true);
  }
  

  
  navData=[
 
    {
      routeLink: "metrics",
      icon: "insert_chart",
      label: "DASH",
      activeicon: "assets/sidnav_icon/home_active.png",
      matTooltip: "API-Usage & Metrics",
      label1: " Metrics",
    },{
      routeLink: "trynow",
      icon: "category",
      label: "DASH1",
      activeicon: "assets/sidnav_icon/home_active.png",
      matTooltip: "Try Now",
      label1: "Try Now",
    },{
      routeLink: "home",
      icon: "vpn_key",
      label: "DASH2",
      activeicon: "assets/sidnav_icon/home_active.png",
      matTooltip: "ApI keys & Documentation",
      label1: "Keys and Doc",
    },{
      routeLink: "credits",
      icon: "account_balance_wallet",
      label: "DASH3",
      activeicon: "assets/sidnav_icon/home_active.png",
      matTooltip: "Credits & Balances",
      label1: "Credits",
    },{
      routeLink: "raisereq",
      alternativeRouteLink: "Ticket_Comments",
      icon: "featured_play_list",
      label: "DASH4",
      activeicon: "assets/sidnav_icon/home_active.png",
      matTooltip: "Raise Request",
      label1: "Raise Request",
    },{
      routeLink: "settings",
      icon: "settings",
      label: "DASH5",
      activeicon: "assets/sidnav_icon/home_active.png",
      matTooltip: "Settings",
      label1: "Settings",
    },

    
  ];



}


