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

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    HeaderComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    multi:true,
    useClass:MainInterceptor
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
