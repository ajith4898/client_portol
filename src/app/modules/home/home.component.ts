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

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: any[] = ['ClientID', 'key', 'expires_at', 'is_active', 'delete'];
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



  constructor(private router: Router, private spinner: SpinnerService, private dbo: AuthserveService, private toast: ToastService) {

    this.cardlistdetails1={
    
      details:[
        {
            "title":"Key",
            "details":"You may combine any of the options above."
                },{
                  "title":"blur",
            "details":"To request multiple images of the same size in your browser, add the random query param to prevent the images from being cached:"
                },{
                  "title":"Advanced Usage",
                  "details":"You may combine any of the options above, For example, to get a specific image that is grayscale and blurred To get an image in the WebP format, you can add .webp to the end of the url."
                }
      ],
      
      samplereponse:[{
        "title":"Authorization Token",
        "details": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9. eyJleHAiOjE3MDQ5NzUwMTUsInVzZXJfaWQiOjQsIm VtYWlsIjoiYmFsYUBhZWlvdGEuY29tIn0. Y33SBK2o7XRcrkRmcTkCHJLqYCJf4Mn5tm0S2XKoUy0",
       
  },{
    "title":"Headers",
    "details": "Accept : */*",
   
  }],
  
     livereponse:[{
      "id": "0",
      "author": "Alejandro Escamilla",
      "width": 5616,
      "height": 3744,
      "url": "https://unsplash.com/...",
      "download_url": "https://picsum.photos/..."
  },{
  "id": "1",
  "author": "Alejandro Escamilla",
  "width": 5616,
  "height": 3744,
  "url": "https://unsplash.com/...",
  "download_url": "https://picsum.photos/..."
  }],
      
    }

  }

  ngOnInit(): void {
    this.getprofiledetails();

    this.cardlistdetails=this.cardlistdetails1;

    this.cardlist=[{
      "name":"User deduplication"
          },{
            "name":"Name match API"
          },{
            "name":"Phone name match"
          },
          
          {
            "name":"Address"
          }
        
        ]
  }


  getprofiledetails() {
    //this.spinner.show();
    this.dbo.getapikey().subscribe((data: any) => {
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
    //this.spinner.show();
    this.dbo.addkeys().subscribe((data: any) => {
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



  onToggle(event: any, id: any) {
    //this.spinner.show();
    console.log("event", event.checked, id);
    var obj = {
      "is_active": event.checked
    }
    this.dbo.updateapikey(obj, id).subscribe((data: any) => {
      console.log(data);
      console.log("data", data);
      this.toast.successNotification("Active Status update Successfully");
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


  delete(id: any) {
    //this.spinner.show();
    this.dbo.deleteapikey(id).subscribe((data: any) => {
      console.log(data);
      console.log("data", data);
      this.toast.successNotification("Deleted Successfully");
      this.getprofiledetails();
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

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  // }

  /** Builds and returns a new User. */
  // function createNewUser(id: number) {
  // const name =
  //   NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
  //   ' ' +
  //   NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
  //   '.';

  // return {
  //   id: id.toString(),
  //   name: name,
  //   progress: Math.round(Math.random() * 100).toString(),
  //   fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
  // };


  changes(event:any){
    console.log("event",event)
    if(event==0){
      this.newclass01=0;
      this.cardlistdetails=this.cardlistdetails1;
    }else if(event==1){
      this.newclass01=1;
      this.cardlistdetails=this.cardlistdetails1;
    }else if(event==2){
      this.newclass01=2;
      this.cardlistdetails=this.cardlistdetails1;
    }else if(event==3){
      this.newclass01=3;
      this.cardlistdetails=this.cardlistdetails1;
    }

  }

}
