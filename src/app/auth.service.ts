import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) {}

  isLoggedIn(){
    let user = this.afAuth.auth.currentUser;
    console.log(user);
    if(user){
      return true;
    }
    return false;
  }

  login(email, pass){
    this.afAuth.auth.signInWithEmailAndPassword(email, pass).catch((error) =>{
      console.log(error.message);
    });
  }

  signOut(){
    this.afAuth.auth.signOut().then(()=>{
      // TODO: Sign out successful.
      console.log("Sign out successful");
    }).catch(()=>{
      // TODO: Handle sign out error.
    });
  }
}
