import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IMovies} from "../interfaces/IMovies";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient:HttpClient) { }

  getAllMovies(page:number = 1):Observable<IMovies>{
    return this.httpClient.get<IMovies>(urls.movie, {params:{page}})
  }

}
