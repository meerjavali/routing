import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../auth-guard.service';
import { canComponentDeactivate } from '../can-deactivate-guard.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
 
})
export class AboutComponent implements OnInit , canComponentDeactivate{
  ngOnInit(): void {
   
  }
  originalId =99;
  OriginalAuthor = "meer";

  id = 99;
  author="meer";
  search=false;
  handle(){
    this.search = true;
    this.router.navigate([this.id+'/'+this.author], {relativeTo:this.route});
  }
  constructor(private auth:AuthGuardService, private router:Router, private route:ActivatedRoute){}



  canDeactivate2(): boolean | Promise<boolean> | Observable<boolean> {
    if((this.id !== this.originalId || this.author !== this.OriginalAuthor) && !this.search){
       confirm("please continue searching.. before navigating away");
       return false;
    }
    else {
      return true;
    }
  }
 



}
