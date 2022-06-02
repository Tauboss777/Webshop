import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore'
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './user.model'
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User | undefined | null>;
  userData: any;

  constructor( public fbAuth: AngularFireAuth,private afs: AngularFirestore, private ngZone: NgZone, private router: Router) { 

    this.user$ = this.fbAuth.authState.pipe(
      switchMap(user => {
          // Logged in
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    )

    this.fbAuth.authState.subscribe((user: any) =>{
      if(user) {
        this.userData = user;
        localStorage.setItem('user', this.userData.email)
      }
    })
  }
  
// Google LogIN

  async googleSignin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.fbAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  private updateUserData(user: any) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = { 
      uid: user.uid, 
      email: user.email, 
      displayName: user.displayName, 
      photoURL: user.photoURL
    } 

    return userRef.set(data, { merge: true })

  }

  async googleSignOut() {
    await this.fbAuth.signOut();
    this.router.navigate(['/']);
  }


  //Normal LogIN

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
      localStorage.removeItem('user')
      this.router.navigate(['/login'])
    })
  }

  isLoggedIn() {
    const user = localStorage.getItem('user');
    return user? true: false;
  }

  getUser() {
    const user = localStorage.getItem('user');
    return user ? user: null;
  }
}
