import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  constructor() { }
  public visible$ = new BehaviorSubject<boolean>(false);
  show() {
    this.visible$.next(true);
    // this.spinnerService.show();
  }
  hide() {
    this.visible$.next(false);
    // this.spinnerService.hide();
  }
  isVisible(): Observable<boolean> {
    return this.visible$.asObservable().pipe(share());
  }
}

