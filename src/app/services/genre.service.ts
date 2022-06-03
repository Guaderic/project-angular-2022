import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../constants";
import {IGenres} from "../interfaces/IGenres";

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private httpClient:HttpClient) { }
  getAllGenres():Observable<IGenres>{
    return this.httpClient.get<IGenres>(urls.genre)
  }
  getById(id:number):Observable<any>{
    return this.httpClient.get<any>(urls.FilmByGenre + {id})
  }
}
