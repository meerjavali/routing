import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Route, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutsComponent } from './about/child/abouts/abouts.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './about/child/child.component';
//*
//this code is shifted to app.routing.module.ts

// const routes:Route[]=[
//   {path:'', component:MainComponent},
//   {path:'about' , component:AboutComponent, children:[
//     {path:':id/:name', component:AboutsComponent},
//     {path:'child', component:ChildComponent}
//   ]}, // syntax for registering router paths
//   {path:'home', component:HomeComponent}
//   // {path:'about/:id/:name', component:AboutsComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    MainComponent,
    AboutsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
    // RouterModule.forRoot(routes) // we are telling our angular application the registred router path information

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
