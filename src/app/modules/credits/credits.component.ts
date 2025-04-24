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
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss']
})
export class CreditsComponent implements OnInit {

  displayedColumns: any[] = ['ClientID', 'key', 'expires_at', 'is_active'];
  dataSource: any[]=[{
    "sno":"1",
    "credituse":"500",
    "transction":"Free Credits",
    "creditbalance":"1250"
        },{
          "sno":"2",
          "credituse":"5000",
          "transction":"Purchased",
          "creditbalance":"250"
        },{
          "sno":"3",
          "credituse":"1500",
          "transction":"Usage",
          "creditbalance":"2500"
        }
      ];
  color: ThemePalette = 'primary';
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  public shown = {
      show01:true,
      show02:false,
      show03:false,
      show04:false,
    }
  cardlistdetails: any;

  constructor(private router: Router, private spinner: SpinnerService, private dbo: AuthserveService, private toast: ToastService) {

    this.cardlistdetails={
    
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
                }, {
                  "title":"Key",
                  "details":"You may combine any of the options above."
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


  }


  changes(event:any){
    console.log("event",event)
    if(event==1){
      this.shown.show01=true;
      this.shown.show02=false;
      this.shown.show03=false;
      this.shown.show04=false;
    }else if(event==2){
      this.shown.show01=false;
      this.shown.show02=true;
      this.shown.show03=false;
      this.shown.show04=false;
    }else if(event==3){
      this.shown.show01=false;
      this.shown.show02=false;
      this.shown.show03=true;
      this.shown.show04=false;
    }else if(event==4){
      this.shown.show01=false;
      this.shown.show02=false;
      this.shown.show03=false;
      this.shown.show04=true;
    }

  }

}
