import { Component, OnInit } from '@angular/core';
import {IMovie} from "../../interfaces/IMovie";
import {MovieService} from "../../services/movie.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IMovies} from "../../interfaces/IMovies";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies:IMovie[]
  page:number
  constructor(private movieService:MovieService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(({page})=>{
      this.movieService.getAllMovies(page||1).subscribe(value => this.movies = value.results)
    })
  }

}
