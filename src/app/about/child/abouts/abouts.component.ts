import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-abouts',
  templateUrl: './abouts.component.html',
  styleUrls: ['./abouts.component.css']
})
export class AboutsComponent {

   userId="";
   authorName="";

  constructor(private route:ActivatedRoute){}

  ngOnInit() // will be excuted only once 
  {
    //  this.userId = this.route.snapshot.params['id'];
    //  this.authorName = this.route.snapshot.params['name'];
    
    this.route.params.subscribe(params=>{
         this.userId = params['id'];
         this.authorName = params['name'];
    })
  }
}


//observables where when ever there happens any event it will automatically observe the event and handles
