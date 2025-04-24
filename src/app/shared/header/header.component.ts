import { Component } from '@angular/core';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';
import { SpinnerService } from 'src/app/service/spinner.service';
import { AuthserveService } from 'src/app/service/authserve.service';
import { ToastService } from 'src/app/service/toast.service';
import { LocalstorageService } from 'src/app/service/localstorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('350ms',
          style({opacity: 1})
        )
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('350ms',
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
  ],
})
export class HeaderComponent {


  menuList:any;
  datakey: any;
  constructor( private router: Router,
    private ls: LocalstorageService,private spinner: SpinnerService, private dbo:AuthserveService, private toast: ToastService){
   
    }
    ngOnInit() {
this.getprofiledetails();
  
    }

    onLogout(){

      this.router.navigate(['/signin']);
    }


    getprofiledetails(){
      this.spinner.show();
        this.dbo.profile().subscribe((data: any) => {
        console.log(data);
        console.log("data", data);
        this.datakey=data.user_profile;
        this.ls.saveUserDetails(JSON.stringify(this.datakey));
        this.spinner.hide();
    }, (error) => {
      console.log(error);

      if(error.status==401){
        this.router.navigate(['/signin']);
        this.toast.errorNofifications(error.error.error);
      }
          this.spinner.hide();
  
        }
      );
   
    }

}
