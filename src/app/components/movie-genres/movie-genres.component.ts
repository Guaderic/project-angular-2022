import {Component, Input, OnInit} from '@angular/core';

import {GenreService} from "../../services/genre.service";
import {IGenre} from "../../interfaces/IGenre";



@Component({
  selector: 'app-movie-genres',
  templateUrl: './movie-genres.component.html',
  styleUrls: ['./movie-genres.component.css']
})
export class MovieGenresComponent implements OnInit {


  constructor(private service:GenreService) {
  }
  @Input()



  ngOnInit() {


  }

}
