import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { SpinnerService } from 'src/app/service/spinner.service';


@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;


  loader: boolean | undefined;
  constructor(public spinner: SpinnerService, ) { }
  ngOnInit() {
   
//this.loader = true;
    this.spinner.visible$.subscribe((val: boolean) => {
      this.loader = val;
    });
  }
  ngAfterViewInit() {
   /*  this.cdRef.detectChanges(); */
  }

  public isShow() {
    this.loader = true;
  }

  public ishide() {
    this.loader = false;
  }

}
