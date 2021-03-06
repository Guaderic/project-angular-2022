import {Component, Input, OnInit} from '@angular/core';
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
  page: number
  counter: number = 1

  constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router,) {
  }

  ngOnInit(): void {

    this.route.queryParams.subscribe(({page}) => {
      this.movieService.getAllMovies(page || 2).subscribe(value => {
        this.movies = value.results;


      })
    })
  }

  Change(counter: number) {
    let num: any = this.movieService.getAllMovies(this.page=counter+1).subscribe(value => {
      this.movies = value.results;
      return num =num+1




    })

  }
}
