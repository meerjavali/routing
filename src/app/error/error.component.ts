import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
 constructor(private route:ActivatedRoute){

 }

 errorMessage;
 ngOnInit(){
    //this.errorMessage=this.route.snapshot.data['message'];  using snapshot 
    this.route.data.subscribe(response=>{  //using data observable
      this.errorMessage = response['message'];
    })
 }
}
