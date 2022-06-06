import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IMovies} from "../interfaces/IMovies";
import {urls} from "../constants";


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient:HttpClient) { }
  searchMovie(query:string):Observable<IMovies>{
    return this.httpClient.get<IMovies>(urls.search + query)
  }
}
