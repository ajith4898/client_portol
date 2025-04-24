import { Component, OnInit } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required components
import SwiperCore , {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
} from 'swiper';
import { BehaviorSubject } from "rxjs";
import { flushMicrotasks } from '@angular/core/testing';


SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller
]);

@Component({
  selector: 'app-trynow',
  templateUrl: './trynow.component.html',
  styleUrls: ['./trynow.component.scss']
})
export class TrynowComponent implements OnInit {

  cardlist:any;
  cardlistdetails:any;
  cardlistdetails1:any;
  cardlistdetails2:any;
  cardlistdetails3:any;
  cardlistdetails4:any;
  newclass01:any=0;
  newclass02:boolean=false;
  newclass03:boolean=false;
  newclass04:boolean=false;

  // public shown = {
  // 1:true,
  //   show01:true,
  //   show02:false,
  //   show03:false,
  //   show04:false,


  // }

  constructor(){
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

    this.cardlistdetails2={
    
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
    "Name": "Alejandro Escamilla",
},{
"id": "1",
"Name": "Ajith",

},{
  "id": "2",
  "Name": "Kumar",
  
  },{
    "id": "3",
    "Name": "Namikaz",
    
    }],
      
    }


    this.cardlistdetails3={
    
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
      "Phone Number": "Matched Successfully",
  }],
      
    }


    this.cardlistdetails4={
    
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
      "Address": "Selvapuram",
  },{
  "id": "1",
  "Address": "coimbatore",
 
  },{
    "id": "1",
    "Address": "India",
   
    }],
      
    }
  }
  

  ngOnInit(): void {
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


  this.cardlistdetails=this.cardlistdetails1;

  }


  changes(event:any){
    console.log("event",event)
    if(event==0){
      this.newclass01=0;
      this.cardlistdetails=this.cardlistdetails1;
    }else if(event==1){
      this.newclass01=1;
      this.cardlistdetails=this.cardlistdetails2;
    }else if(event==2){
      this.newclass01=2;
      this.cardlistdetails=this.cardlistdetails3;
    }else if(event==3){
      this.newclass01=3;
      this.cardlistdetails=this.cardlistdetails4;
    }

  }

  slides = Array.from({ length: 5 }).map((el, index) => `Slide ${index + 1}`);
  virtualSlides = Array.from({ length: 600 }).map((el, index) => `Slide ${index + 1}`);
}
