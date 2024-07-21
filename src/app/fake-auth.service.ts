import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {
   loggedIn = false;
  
   isAuthenticated(){
   console.log("user login status ",this.loggedIn);
    const promise = new Promise((resolve,reject)=>{
          setTimeout(()=>{
            console.log("user login status sent to authguard  after 5 sec as ", this.loggedIn);
            resolve(this.loggedIn)
          },5000)
    })

    return promise;

    //return this.loggedIn;
   }


   login(){
    this.loggedIn = true;
   }

   logout(){
    this.loggedIn =false;
   }
  constructor() { }
}
function resolve(resolve: (value: unknown) => void, reject: (reason?: any) => void): void {
  throw new Error('Function not implemented.');
}

function reject(resolve: (value: unknown) => void, reject: (reason?: any) => void): void {
  throw new Error('Function not implemented.');
}

