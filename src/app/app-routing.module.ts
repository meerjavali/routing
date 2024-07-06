import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { AboutsComponent } from './about/child/abouts/abouts.component';
import { ChildComponent } from './about/child/child.component';
import { HomeComponent } from './home/home.component';

const routes:Route[]=[
  {path:'', component:MainComponent},
  {path:'about' , component:AboutComponent, children:[
    {path:':id/:name', component:AboutsComponent},
    {path:'child', component:ChildComponent}
  ]}, // syntax for registering router paths
  {path:'home', component:HomeComponent}
  // {path:'about/:id/:name', component:AboutsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
