import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'routing';

  ngOnInit(){

  }
 constructor(private router:Router){} // Dependencies are injected as constructor parameter
  
 
 OnAboutClick(){/// this method used for programatic navigation
    //
    this.router.navigate(['/about']);
  }
}

// date 5/7/2024
// 1. what is Routing 
// 2. how to register router paths 
// 3. how to navigate to router paths using router Link 
// 4.  how to navigate to router paths using programmatic way 
// 5. routerLinkActive and routerLinkActiveOptions
