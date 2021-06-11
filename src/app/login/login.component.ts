import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
regis: boolean = false;
  constructor(private ls: LoginService) { }

  ngOnInit(): void {
  }
  onSubmit(loginForm: { value: any; }) {

  }
  onSubmitRegister(register:any){
    console.log(register.value);
    this.ls.registerUser(register);
  }

}
