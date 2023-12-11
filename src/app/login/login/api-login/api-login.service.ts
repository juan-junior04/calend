import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {
  
  constructor(private htpp:HttpClient) { }

findAllUser():Observable<any[]>{
   return this.htpp.get<any[]>('http://localhost/backend/index.php?action=findAllUser')
}

}
