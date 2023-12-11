// shared-data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  setLoggedIn(value: boolean) {
    this.loggedIn.next(value);
  }

  getLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
}
