import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Register } from './Register';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

 
registerUser(register: any){
    return this.http.post<Register>('http://localhost:8080/register',register).subscribe(data =>{
      console.log(data);
    });
}
}
