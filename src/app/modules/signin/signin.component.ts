import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserveService } from 'src/app/service/authserve.service';
import { LocalstorageService } from 'src/app/service/localstorage.service';
import { SpinnerService } from 'src/app/service/spinner.service';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  singin!: FormGroup;
  emailverify!: FormGroup;
  disablelogin :boolean=false;
  hide: boolean = true;
  public error: boolean=false; 
  public loading: boolean=false;
   public errordata:any;
  emailid: any;

  public shown = {
    emailform: true,
    otpform: false,
  }


  display: any;
  resendOtp: boolean = false;
  displayTimer: boolean = false;
  timer:  any;


  constructor(private spinner: SpinnerService,   private ls: LocalstorageService, private fb: FormBuilder, private dbo:AuthserveService ,private toast: ToastService, private router: Router){

  }

  ngOnInit(): void {

    
    this.emailverify = new FormGroup({
      'email': new FormControl('', [Validators.required]),
    });


    this.singin = new FormGroup({
      'email': new FormControl('', [Validators.required]),
      'otp': new FormControl('', [Validators.required]),
    });

  }

  onLogin(){
    this.spinner.show();
    if(this.singin.valid){
    this.dbo.signin(this.singin.value).subscribe((data: any) => {
   // console.log(data);
  //  console.log("data", data);
    this.ls.saveToken(data.access_token);
    this.router.navigate(['/home']);
    this.singin.reset();
    this.emailverify.reset();
    this.spinner.hide();
}, (error) => {
 // console.log(error);
//  console.log("err",error.status,error.error.error);
  if(error.status==401){
    this.toast.errorNofifications(error.error.error);
  }
      this.spinner.hide();

    }
  );
    }else{
      this.spinner.hide();
    }
  }

  sendotp(){
  //   this.spinner.show();
  //   this.emailid=this.emailverify.value.email;
  //   this.singin.controls['email'].setValue(this.emailverify.value.email);
  //   if(this.emailverify.valid){
  //     this.dbo.sendotp(this.emailverify.value).subscribe((data: any) => {
  //  //   console.log(data);
  //    // console.log("data", data);
      this.shown.emailform=false;
      this.shown.otpform=true;
  //     this.toast.successNotification(data);
  // this.start(2);
  //     this.spinner.hide();
  
  // }, (error) => {
  //  // console.log(error);
  //  // console.log("err",error.status,error.error.error);
  //   if(error.status==401){
  //     this.toast.errorNofifications(error.error.error);
  //   }
  //       this.spinner.hide();

  //     }
  //   );
  // }else{
  //   this.spinner.hide();
  // }
  }

  resendotp(){
    this.spinner.show();
    if(this.emailverify.valid){
      this.dbo.sendotp(this.emailverify.value).subscribe((data: any) => {
     // console.log(data);
    //  console.log("data", data);
      this.toast.successNotification(data);
  this.resendstart(2);
      this.spinner.hide();
  
  }, (error) => {
 //   console.log(error);
 //   console.log("err",error.status,error.error.error);
    if(error.status==401){
      this.toast.errorNofifications(error.error.error);
    }
        this.spinner.hide();

      }
    );
    }else{
      this.spinner.hide();
    }

  }

  cancel(){
    this.spinner.show();
    this.shown.emailform=true;
    this.shown.otpform=false;
    clearInterval( this.timer )
    this.timer = null
    this.resendOtp = true;
    this.displayTimer = false;
   
    this.spinner.hide();
  }


  start(minute:any) {

    this.displayTimer = true;
    this.resendOtp = false;
    // let minute = 1;
    let seconds = minute * 60;
    let textSec: any = '0';
    let statSec = 60;

    const prefix = minute < 10 ? '0' : '';

 

    this.timer = setInterval(() => {
    //  console.log('finished',);
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;

      // if (statSec < 10) textSec = "0" + statSec;
      // textSec = statSec;

      if (statSec < 10) {
      //  console.log('inside', statSec);
        textSec = '0' + statSec;
      } else {
     //   console.log('else', statSec);
        textSec = statSec;
      }

      // this.display = prefix + Math.floor(seconds / 60) + ":" + textSec;
      this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;

      if (seconds == 0) {
      //  console.log('finished');
        clearInterval( this.timer );
        this.resendOtp = true;
        this.displayTimer = false;
      }
    }, 1000);
  }




  resendstart(minute: any) {

    // this.log.sendotp(this.forgotform.value.emailforgot).subscribe((data: any) => {
    //   console.log(data);
    //   console.log("data", data);
    //   if (data.status == true) {
    //     this.spinner.hide();
    //     // this.toast.successNotification("OTP Send Successfully");
       

    //   } else if (data.status == false) {
    //     this.spinner.hide();
    //   }
    // },
    //   error => {
    //     this.disabled = false;
    //     this.spinner.hide();
    //     // this.errorsdata = "Invalid Email or Password";
    //   }
    // );
    this.displayTimer = true;
    this.resendOtp = false;
    // let minute = 1;
    let seconds = minute * 60;
    let textSec: any = '0';
    let statSec = 60;

    const prefix = minute < 10 ? '0' : '';
    this.timer  = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;

      // if (statSec < 10) textSec = "0" + statSec;
      // textSec = statSec;

      if (statSec < 10) {
      //  console.log('inside', statSec);
        textSec = '0' + statSec;
      } else {
      //  console.log('else', statSec);
        textSec = statSec;
      }

      // this.display = prefix + Math.floor(seconds / 60) + ":" + textSec;
      this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;

      if (seconds == 0) {
      //  console.log('finished');
        clearInterval( this.timer );
        this.resendOtp = true;
        this.displayTimer = false;
      }
    }, 1000);

  }
}

