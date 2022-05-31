import { Component, OnInit } from '@angular/core';
import {IMovie} from "../../interfaces/IMovie";
import {MovieService} from "../../services/movie.service";
import {ActivatedRoute, Router} from "@angular/router";



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies:IMovie[]
  page:number
  query:string
  count:number = 0;
  pageSize = 8;
  currentIndex = -1;
  currentPost: IMovie;
  constructor(private movieService:MovieService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(({page})=>{
      this.movieService.getAllMovies(page||1).subscribe(value => this.movies = value.results)
    })
  }
  handleChangePage(event: number): void {
    this.page = event;
  }


  changePage():void{
    this.router.navigateByUrl('/page=2')

  }
}
