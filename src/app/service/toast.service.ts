import { style } from "@angular/animations";
import { Component, Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import Swal from "sweetalert2";
import { LocalstorageService } from "./localstorage.service";
@Injectable({
  providedIn: "root",
})
export class ToastService {
  timeLeft: number = 2;
  interval: any;

  constructor(private snackBar: MatSnackBar,private local:LocalstorageService) {}
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      verticalPosition: "top",
      duration: 3000,
      panelClass: ["warning"],
    });
  }

  successNotification(data:any) {
    let timerInterval: NodeJS.Timeout;
   
    Swal.fire({
      title: data,
      icon: 'success',
      timer: 3000,
      timerProgressBar: false,
  color:'#002D73',

//   customClass:{
// title:'margin:0'
//   },
width:'250px',
background:'#ffff',
heightAuto:false,
iconColor:'#002D73',
showConfirmButton: true,
confirmButtonColor:'#002D73',

    })
    setTimeout(() => {
      Swal.close();
    }, 3000);
  }

 

  
   
  errorNofification(){
    // Swal.fire('','No data available', 'error');
    Swal.fire({
      title: 'Oops...',
      text: 'No data available',
      icon: 'error',
      timer: 3000,
      showConfirmButton: true,
confirmButtonColor:'#149C9D',
    })
    setTimeout(() => {
      Swal.close();
    }, 3000);
  }


  errorNofifications(data:any){
    let timerInterval: NodeJS.Timeout;
    Swal.fire({
      title: data,
      
      icon: 'error',
     
      showConfirmButton: true,
confirmButtonColor:'#cc3300',
width:'250px',
background:'#ffff',
heightAuto:true,
iconColor:'#cc3300',

// showConfirmButton: false,
// confirmButtonColor:'#149C9D',
})
setTimeout(() => {
  Swal.close();
}, 3000);
  }
  

  warningNotification(data:any) {

    Swal.fire({
      title: data,
      icon: 'warning',
     timer: 3000,
      timerProgressBar: false,
  color:'#f09500',

//   customClass:{
// title:'margin:0'
//   },
width:'250px',
background:'#ffff',
heightAuto:false,
iconColor:'#f09500',
showConfirmButton: true,
confirmButtonColor:'#f09500',

    })
    setTimeout(() => {
      Swal.close();
    }, 3000);
  }

  serverNotification(data:any) {

    Swal.fire({
      title: data,
      icon: 'warning',
     timer: 2000,
      timerProgressBar: false,
  color:'#4682B4',
  

//   customClass:{
// title:'margin:0'
//   },
width:'250px',
background:'#ffff',
heightAuto:false,
iconColor:'#4682B4',
showConfirmButton: true,
confirmButtonColor:'#4682B4',


    })

    setTimeout(() => {
      Swal.close();
    }, 2000);
  }

  ///=================================delete toast=============///

  deleteNotification() {
    var dataconfirm: any;
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      confirmButtonColor: "#198754",
      background: "#ffff",
      iconColor: "#dc3545",
      heightAuto: false,
      cancelButtonColor: "#dc3545",
      buttonsStyling: true,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        iconColor: "#dc3545",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          console.log("function called")
          dataconfirm='sucess'
          var data = "Your file has been deleted.";
          Swal.fire({
            title: data,
            icon: "success",
            timerProgressBar: false,
            color: "#149C9D",
            width: "350px",
            background: "#ffff",
            heightAuto: false,
            iconColor: "#149C9D",
            showConfirmButton: true,
            confirmButtonColor: "#149C9D",
          });
          // swalWithBootstrapButtons.fire(
          //   'Deleted!',
          //   'Your file has been deleted.',
          //   'success'
          // )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {

          dataconfirm='not sucess'
          var data = "Your imaginary file is safe";
          Swal.fire({
            title: data,
            icon: "error",
            showConfirmButton: true,
            confirmButtonColor: "#cc3300",
            width: "350px",
            background: "#ffff",
            heightAuto: false,
            iconColor: "#cc3300",
          });
          // swalWithBootstrapButtons.fire(
          //   'Cancelled',
          //   'Your imaginary file is safe',
          //   'error'
          // )
        }
      });
      return dataconfirm;
  }



  No_inter_connection_Notification(data:any){
    let timerInterval: NodeJS.Timeout;
    Swal.fire({
      title: data,
      
      icon: 'error',
     
      showConfirmButton: true,
confirmButtonColor:'#cc3300',
width:'250px',
background:'#ffff',
heightAuto:true,
iconColor:'#cc3300',

// showConfirmButton: false,
// confirmButtonColor:'#149C9D',
    })
    // setTimeout(() => {
    //   Swal.close();
    // }, 3000);
  }
  
  inter_connection_Notification(data:any) {
    let timerInterval: NodeJS.Timeout;
   
    Swal.fire({
      title: data,
      icon: 'success',
      timer: 3000,
      timerProgressBar: false,
  color:'#149C9D',

//   customClass:{
// title:'margin:0'
//   },
width:'250px',
background:'#ffff',
heightAuto:false,
iconColor:'#149C9D',
showConfirmButton: true,
confirmButtonColor:'#149C9D',

    })
    setTimeout(() => {
      Swal.close();
    }, 2000);
  }



}
