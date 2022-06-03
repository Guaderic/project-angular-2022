import {Component, OnInit} from '@angular/core';
import {IMovie} from "../../interfaces/IMovie";
import {MovieService} from "../../services/movie.service";
import {ActivatedRoute, Router} from "@angular/router";



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: IMovie[]
  page:number
  counter:number= 1

  constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router,) {}
  ngOnInit(): void {

    this.route.queryParams.subscribe(({page}) => {
      this.movieService.getAllMovies(page||1).subscribe(value => {
        this.movies = value.results;


      })
    })
  }
  Change(counter:number) {
     this.movieService.getAllMovies(counter).subscribe(value => {
        this.movies = value.results;


    })

  }
}

