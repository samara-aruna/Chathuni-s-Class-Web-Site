import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { ClassesComponent } from './classes/classes.component';


const routes: Routes = 
[

  {path:'aboutus',component:AboutUsComponent},
  {path:'', component:HomeComponent},
  {path:'classes',component:ClassesComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
