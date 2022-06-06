import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {MoviesComponent} from "./components/movies/movies.component";
import {MovieDetailsComponent} from "./components/movie-details/movie-details.component";
import {MovieGenresComponent} from "./components/movie-genres/movie-genres.component";
import {LoginComponent} from "./components/login/login/login.component";
import {NotFoundComponent} from "./components/not-found/not-found/not-found.component";
import {AuthGuard} from "./guards/auth.guard";
import {MovieSearchComponent} from "./components/movie-search/movie-search/movie-search.component";
import {UserComponent} from "./components/user/user/user.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path:'', redirectTo:'login', pathMatch:'full'},
  {
    path: '', component: MainLayoutComponent,
    canActivate:[AuthGuard],
    canDeactivate:[AuthGuard],
    children: [
      {path: 'movies', component: MoviesComponent},
      {path: 'movies/:id', component: MovieDetailsComponent},
      {path: 'genres-film', component: MovieGenresComponent},
      {path:'search', component:MovieSearchComponent},
      {path:'user', component:UserComponent}
    ]
  },
  {path: '**', component: NotFoundComponent}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
