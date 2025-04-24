import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthserveService } from 'src/app/service/authserve.service';
import { LocalstorageService } from 'src/app/service/localstorage.service';
import { SpinnerService } from 'src/app/service/spinner.service';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-ticketcomments',
  templateUrl: './ticketcomments.component.html',
  styleUrls: ['./ticketcomments.component.scss']
})
export class TicketcommentsComponent implements OnInit {
  iddatarou:any;
  ticketData: any;
  Currentuserid: any;
  ticketinfo: any;

  

  @ViewChild("fileUpload001")fileUpload001!: ElementRef;
  frtrfiles: any = [];
  ufiles: any[] = [];
  files: File[] = [];
  actionForm!: FormGroup;

  constructor(public routact:ActivatedRoute,public router: Router,private ls: LocalstorageService,private routers: Router, private spinner: SpinnerService, private dbo: AuthserveService, private toast: ToastService) {   }

  ngOnInit(): void {

    this.actionForm = new FormGroup({
      // 'subject': new FormControl('',Validators.required),
      'comment': new FormControl(''),
      'status': new FormControl(''),
    });
    
    this.spinner.show();
    this.iddatarou=JSON.parse(this.ls.getTicketId());
    this.Currentuserid=JSON.parse(this.ls.getUserDetails()).user_id;
  if(this.iddatarou!=null && this.iddatarou!='' ){
    this.GetTicketinfo(this.iddatarou);
this.GetTicketDetails(this.iddatarou);
  }else{
    this.spinner.hide();
  }
   
  }


  GetTicketDetails(id: any) {
    this.spinner.show();
    this.dbo.GetTicketDetailsbyid(id.ID).subscribe((data: any) => {
      console.log(data);
      console.log("data", data);
      this.ticketData=data;
      this.spinner.hide();
    }, (error) => {
      console.log(error);
      if (error.status == 401) {
        this.toast.errorNofifications(error.error.error);
      }
      this.spinner.hide();
    }
    );

  }

  GetTicketinfo(id: any) {
    this.spinner.show();
    this.dbo.GetTicketInfobyid(id.ID).subscribe((data: any) => {
      // console.log(data);
      console.log("data", data);
      this.ticketinfo=data;
      this.spinner.hide();
    }, (error) => {
      console.log(error);
      if (error.status == 401) {
        this.toast.errorNofifications(error.error.error);
      }
      this.spinner.hide();
    }
    );

  }

  removeforrfq(i: number) {
    this.frtrfiles.splice(i, 1);
    this.ufiles.splice(i, 1);
  }

  goToLinkforpi(url: string) {
    window.open(url);                    

  }

  saveticket(){
    let formData = new FormData();
    // formData.append("subject",this.actionForm.value.subject);
    formData.append("comment",this.actionForm.value.comment);
    formData.append("status",this.actionForm.value.status);
   
    for (var i = 0; i < this.ufiles.length; i++) {
      formData.append("attachments", this.ufiles[i] as File);
    }
      this.spinner.show();
    if(this.actionForm.valid ){
      console.log("this.mainform.value",this.actionForm.value);
   
    
        this.dbo.TicketCmt(formData,this.iddatarou.ID).subscribe((data: any) => {
            console.log("datsa", data);
            this.GetTicketDetails(this.iddatarou);
            this.actionForm.reset();
            this.ufiles=[];
            this.frtrfiles=[];
            this.files=[];
                      this.spinner.hide();
        }, (error) => {
          console.log(error);
          this.spinner.hide();
        }); 
    
    }
    else{
       this.spinner.hide();
    }
  }


  onFileSelected001(event: any) {
    const filesList: FileList = event.target.files;
    const filesAmount: number = filesList.length;
      console.log("this.ufiles.length", this.ufiles.length + filesAmount)

      for (let i = 0; i < filesAmount; i++) {
        this.ufiles.push(event.target.files[i]);

        let fileList = event.target.files;
        let file = fileList[i];
        var reader = new FileReader();

        reader.onload = (event: any) => {
          console.log(file);
          let ext = file.type.split("/", 1).pop();
          let ext1 = file.name.split(".").pop();
          console.log(event);
          let data = {
            img: event.target.result,
            imgname: file.name,
            extention: ext,
            extention1: ext1,
            status: 0,
          };
          this.frtrfiles.push(data);
          this.files = this.frtrfiles[i];
          console.log(this.frtrfiles, "frtrfiles");
        };
        reader.readAsDataURL(event.target.files[i]);
        console.log(this.ufiles, "ufiles");
      }
  }


  onClick(event: any) {
    if (this.fileUpload001) this.fileUpload001.nativeElement.click();
  }

  backgrid(){
    this.spinner.show();
    this.router.navigate(['raisereq']);
    this.spinner.hide();
  }


  getcall(){
    this.GetTicketDetails(this.iddatarou);
  }
}


