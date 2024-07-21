import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { AuthGuardService } from './auth-guard.service';
import { FakeAuthService } from './fake-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'routing';

  ngOnInit(){
    
  }
 constructor(private router:Router, private auth:AuthGuardService, private ser:FakeAuthService){} // Dependencies are injected as constructor parameter
  
 
 OnAboutClick(){/// this method used for programatic navigation
    //
    this.router.navigate(['/about']);
  }

  login(){
    this.ser.login();
  }
  logout(){
    this.ser.logout();
  }
}

// date 5/7/2024
// 1. what is Routing 
// 2. how to register router paths 
// 3. how to navigate to router paths using router Link 
// 4.  how to navigate to router paths using programmatic way 
// 5. routerLinkActive and routerLinkActiveOptions
// date 6/7/2024
// 1. how to pass parameters to route path
// 2. how to get parameters values in our component using traditional way snapshot one
// 3. how to get parameters  values in our component using params observable
//4. child routes registry 
//5. usage of app.routing.module.ts for route path info/registration
