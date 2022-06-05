import {Component, Input, OnInit} from '@angular/core';

import {GenreService} from "../../services/genre.service";
import {IMovie} from "../../interfaces/IMovie";



@Component({
  selector: 'app-movie-genres',
  templateUrl: './movie-genres.component.html',
  styleUrls: ['./movie-genres.component.css']
})
export class MovieGenresComponent implements OnInit {


  constructor(private service:GenreService) {
  }
  @Input()
  movie:IMovie


  ngOnInit() {


  }

}
