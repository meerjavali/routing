import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { AboutsComponent } from './about/child/abouts/abouts.component';
import { ChildComponent } from './about/child/child.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { AuthGuardService } from './auth-guard.service';
import { CanDeactivateGuardService } from './can-deactivate-guard.service';

const routes:Route[]=[
  {path:'', component:MainComponent},
  {path:'about' , component:AboutComponent, canActivate:[AuthGuardService], 
    canDeactivate:[CanDeactivateGuardService], children:[
    {path:':id/:name', component:AboutsComponent},
    {path:'child', component:ChildComponent}
  ]}, // syntax for registering router paths
  {path:'home', component:HomeComponent},
  {path:'error', component:ErrorComponent , data:{message:'page not found please use correct route paths'} },// static data passign through routes
  {path:'**', redirectTo:'/error'}
  // {path:'about/:id/:name', component:AboutsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
