import { Component, OnInit } from '@angular/core';
import {IMovie} from "../../interfaces/IMovie";
import {MovieService} from "../../services/movie.service";
import {ActivatedRoute, Params, Router} from "@angular/router";





@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies:IMovie[]
  page:number = 1
  query:string
  total:number = 0;
  currentPage: number = 0;


  currentPost: IMovie;
  constructor(private movieService:MovieService, private route:ActivatedRoute, private router:Router,
              ) { }

  ngOnInit(): void {



  this.route.queryParams.subscribe(({page})=>{
    this.movieService.getAllMovies(page||1).subscribe(value => {
      this.movies = value.results;
    })
  })
  }

  getAllMovies(){
    this.movieService.getAllMovies(this.page)
      .subscribe((response: any) => {
        this.movies = response.data;

      });
  }

  pageChangeEvent(event: number){
    this.page = event;
    this.getAllMovies();

  }



}
