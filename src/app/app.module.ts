import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { HeaderComponent } from './components/header/header.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MainInterceptor} from "./main.interceptor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MatCardModule} from "@angular/material/card";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { GenresComponent } from './components/genres/genres.component';
import { GenreComponent } from './components/genre/genre.component';
import {NgxStarRatingModule} from "ngx-star-rating";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    HeaderComponent,
    MainLayoutComponent,
    MovieDetailsComponent,
    GenresComponent,
    GenreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatSlideToggleModule,
    NgxStarRatingModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    multi:true,
    useClass:MainInterceptor
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
