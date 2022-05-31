import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {MoviesComponent} from "./components/movies/movies.component";
import {MovieDetailsComponent} from "./components/movie-details/movie-details.component";

const routes:Routes=[
  {path:'', component:MainLayoutComponent, children:[
      {path:'movies', component:MoviesComponent},
      {path:'movies/:id',component:MovieDetailsComponent}




    ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
