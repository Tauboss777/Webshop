import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( public fbAuth: AngularFireAuth, private ngZone: NgZone, private router: Router) { 
    this.fbAuth.authState.subscribe((user: any) =>{
      if(user) {
        console.log('user', user)
      }
    })
  }

  signIN(email: any, password: any) {
    return this.fbAuth.signInWithEmailAndPassword(email, password)
    .then((result: any)=>{
      this.router.navigate(['/'])
      
    }).catch((error: { message: any; })=>{
      window.alert(error.message)
    })
  }
  signUp(email: any, password: any) {
    return this.fbAuth.createUserWithEmailAndPassword(email, password)
    .then((result: any)=>{
      this.router.navigate(['/'])

    }).catch((error: { message: any; })=>{
      window.alert(error.message)
    })
  }
  logOut() {
    return this.fbAuth.signOut().then(()=>{
      this.router.navigate(['/login'])
    })
  }
}
