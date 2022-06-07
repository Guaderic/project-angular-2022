import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {urls} from "../constants";
import {IMovies} from "../interfaces/IMovies";

@Injectable({
  providedIn: 'root'
})
export class TopMoviesService {

  constructor(private httpClient:HttpClient) { }
  getTopMovies():Observable<IMovies>{
    return this.httpClient.get<IMovies>(urls.topMovie)
  }

}
