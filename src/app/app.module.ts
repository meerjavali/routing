import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Route, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes:Route[]=[
  {path:'', component:MainComponent},
  {path:'about' , component:AboutComponent}, // syntax for registering router paths
  {path:'home', component:HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes) // we are telling our angular application the registred router path information

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
