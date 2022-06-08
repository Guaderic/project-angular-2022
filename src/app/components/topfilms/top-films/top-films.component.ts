import {Component, OnInit} from '@angular/core';
import {TopMoviesService} from "../../../services/top-movies.service";
import {IMovie} from "../../../interfaces/IMovie";
import {Router} from "@angular/router";


@Component({
  selector: 'app-top-films',
  templateUrl: './top-films.component.html',
  styleUrls: ['./top-films.component.css']
})
export class TopFilmsComponent implements OnInit {
  movies:IMovie[]

  constructor(private service:TopMoviesService, private  router:Router) { }

  ngOnInit(): void {
    this.service.getTopMovies().subscribe(value=>this.movies = value.results)

  }


}
