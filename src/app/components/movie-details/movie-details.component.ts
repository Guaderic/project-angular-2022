import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../../services/movie.service";
import {IMovie} from "../../interfaces/IMovie";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie:IMovie
  constructor(private route:ActivatedRoute, private movieService:MovieService) { }


  ngOnInit(): void {
    this.route.params.subscribe(({id})=>{
      this.movieService.getById(id).subscribe(value => this.movie = value)
    })
  }

}
