import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IMovies} from "../interfaces/IMovies";
import {urls} from "../constants";
import {IMovie} from "../interfaces/IMovie";


@Injectable({
  providedIn: 'root'
})
export class MovieService {


  constructor(private httpClient:HttpClient) { }

  getAllMovies(page:number):Observable<IMovies>{
    return this.httpClient.get<IMovies>(urls.movie + '?page=' + page)
  }


  getById(id:number):Observable<IMovie>{
    return this.httpClient.get<IMovie>(urls.movieDetails + '/'+ id)
  }






}
