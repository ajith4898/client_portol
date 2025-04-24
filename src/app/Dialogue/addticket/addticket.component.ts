import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SpinnerService } from 'src/app/service/spinner.service';
import { AuthserveService } from 'src/app/service/authserve.service';
import { ToastService } from 'src/app/service/toast.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalstorageService } from 'src/app/service/localstorage.service';

@Component({
  selector: 'app-addticket',
  templateUrl: './addticket.component.html',
  styleUrls: ['./addticket.component.scss']
})
export class AddticketComponent {

  actionForm!: FormGroup;
  loader: Boolean=false;
  @ViewChild("fileUpload001")fileUpload001!: ElementRef;
  frtrfiles: any = [];
  ufiles: any[] = [];
  files: File[] = [];

  constructor(private spinner: SpinnerService, private dbo: AuthserveService,public dialog: MatDialog,public router: Router, private ls: LocalstorageService,
    public dialogRef: MatDialogRef<AddticketComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private toast: ToastService
  ) {
  }

  ngOnInit(): void {
    this.loader = false;
    this.actionForm = new FormGroup({
      'subject': new FormControl('',Validators.required),
      'description': new FormControl(''),
      'priority': new FormControl('',Validators.required),
    });
  }
  onClick(event: any) {
    if (this.fileUpload001) this.fileUpload001.nativeElement.click();
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  phasError(controlName: string, errorName: string) {
    return this.actionForm.get(controlName)?.hasError(errorName);
  }

  cancelupdatepage(){
    this.dialogRef.close();
  }

  saveticket(){
    let formData = new FormData();
    formData.append("subject",this.actionForm.value.subject);
    formData.append("description",this.actionForm.value.description);
    formData.append("priority",this.actionForm.value.priority);
   
    for (var i = 0; i < this.ufiles.length; i++) {
      formData.append("attachments", this.ufiles[i] as File);
    }
    this.loader = true;
    if(this.actionForm.valid ){
      console.log("this.mainform.value",this.actionForm.value);
   
    
        this.dbo.CreateTicket(formData).subscribe((data: any) => {
            console.log("datsa", data)
            this.loader = false;
            this.dialogRef.close();
            this.ls.saveTicketId(JSON.stringify(data));
            this.toast.successNotification("Ticket Added Successfully");
            this.router.navigate(['Ticket_Comments']);
        }, (error) => {
          console.log(error);
          this.loader = false;
        }); 
    
    }
    else{
       this.loader = false;
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

  removeforrfq(i: number) {
    this.frtrfiles.splice(i, 1);
    this.ufiles.splice(i, 1);
  }

  goToLinkforpi(url: string) {
    window.open(url);                    

  }
}
