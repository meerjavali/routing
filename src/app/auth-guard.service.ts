import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FakeAuthService } from './fake-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
 
  constructor(private ser:FakeAuthService, private router:Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    return this.ser.isAuthenticated().then(data=>{
      if(data){
        return true;
      }
      else{
        this.router.navigate(['/']);
        return false;
      }
    })

   // return this.ser.isAuthenticated();
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    return this.canActivate(route,state);
  }
}
