import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public authServ : AuthService) {

  }

  ngOnInit() {
    
  }

  signup(name, email, pass){
    this.authServ.signup(name, email, pass);
  }

}
