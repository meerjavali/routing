import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuardService implements CanDeactivate<canComponentDeactivate>{

  constructor() { }
  canDeactivate(component: canComponentDeactivate, 
    currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot, 
    nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {

    return component.canDeactivate2();
  }

}


export interface canComponentDeactivate{
  canDeactivate2():boolean |  Promise<boolean> | Observable <boolean>;
}