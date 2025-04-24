import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SpinnerService } from 'src/app/service/spinner.service';
import { AuthserveService } from 'src/app/service/authserve.service';
import { ToastService } from 'src/app/service/toast.service';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { AddticketComponent } from 'src/app/Dialogue/addticket/addticket.component';
import { LocalstorageService } from 'src/app/service/localstorage.service';

@Component({
  selector: 'app-raiserequest',
  templateUrl: './raiserequest.component.html',
  styleUrls: ['./raiserequest.component.scss']
})
export class RaiserequestComponent {

  displayedColumns: any[] = ['ID', 'ticket_type', 'subject', 'status', 'priority', 'CreatedAt', 'UpdatedAt', 'resolved_at','View'];
  dataSource: any;
  color: ThemePalette = 'primary';
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  datakey: any;
  cardlist:any;
  cardlistdetails:any;
  cardlistdetails1:any;
  cardlistdetails2:any;
  cardlistdetails3:any;
  cardlistdetails4:any;
  newclass01:any=0;



  constructor(private router: Router,private ls: LocalstorageService, private spinner: SpinnerService,public dialog: MatDialog, private dbo: AuthserveService, private toast: ToastService) {

  }

  ngOnInit(): void {
    this.getprofiledetails();
  }


  getprofiledetails() {
    ////this.spinner.show();
    this.dbo.getTickets().subscribe((data: any) => {
      console.log(data);
      console.log("data", data);
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.datakey = data;
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


  addkeys() {
    // this.dbo.addkeys().subscribe((data: any) => {
    //   console.log(data);
    //   console.log("data", data);
    //   this.dataSource = new MatTableDataSource(data);
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    //   this.datakey = data;
    //   this.spinner.hide();
    // }, (error) => {
    //   console.log(error);

    //   if (error.status == 401) {
    //     this.toast.errorNofifications(error.error.error);
    //   }
    //   this.spinner.hide();

    // }
    // );

    const dialogRef = this.dialog.open(AddticketComponent, {
      height: '75vh',
      width: '65%',
      position: {
        left: '18%',
        right: '10%',
        top: '2vh',
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getprofiledetails();
    });

  }


  opencmt(data:any){
    this.ls.saveTicketId(JSON.stringify(data));
    this.toast.successNotification("Ticket Added Successfully");
    // this.router.navigate(['Ticket_Comments']);
  }


}

