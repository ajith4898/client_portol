import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserveService } from 'src/app/service/authserve.service';
import { SpinnerService } from 'src/app/service/spinner.service';
import { ToastService } from 'src/app/service/toast.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  singin!: FormGroup;
  disablelogin :boolean=false;
  hide: boolean = true;
  public error: boolean=false; 
  public loading: boolean=false;
   public errordata:any;

  constructor(private spinner: SpinnerService, private fb: FormBuilder, private dbo:AuthserveService , private router: Router,    private toast: ToastService){

  }

  ngOnInit(): void {

    
    this.singin = new FormGroup({
      'email': new FormControl('', [Validators.required]),
      'name': new FormControl('', [Validators.required]),
      'company_name': new FormControl('', [Validators.required]),
    });


  }
       
  onLogin(){
    this.spinner.show();
    if(this.singin.valid){
      this.dbo.signup(this.singin.value).subscribe((data: any) => {
      

        this.spinner.hide();
        this.router.navigate(['/signin']);
        this.toast.successNotification("Account Created Successfully");
  
      }, (error) => {
        this.spinner.hide();
        console.log(error);
        console.log("err",error.status,error.error.error);
        if(error.status==401){
          this.toast.errorNofifications(error.error.error);
        }
        
      });
    }else{
      this.spinner.hide();
    }
 

  
  }

}
