import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authServ : AuthService) {

  }

  ngOnInit() {

  }

  login(email, pass){
    this.authServ.login(email, pass);
  }

}
