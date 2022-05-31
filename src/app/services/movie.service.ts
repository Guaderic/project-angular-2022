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
  _searchURL = 'https://api.themoviedb.org/3/search/keyword'

  constructor(private httpClient:HttpClient) { }

  getAllMovies(page:number = 1):Observable<IMovies>{
    return this.httpClient.get<IMovies>(urls.movie, {params:{page}})
  }
  searchMovies(query:string = ''):Observable<IMovies>{
    return this.httpClient.get<IMovies>(this._searchURL, {params:{query}})
  }
  getById(id:number):Observable<IMovie>{
    return this.httpClient.get<IMovie>(urls.movieDetails + '/'+ id)
  }
}
