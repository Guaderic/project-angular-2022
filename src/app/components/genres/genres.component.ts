import { Component, OnInit } from '@angular/core';
import {GenreService} from "../../services/genre.service";
import {IGenre} from "../../interfaces/IGenre";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  genres:IGenre[]
  constructor(private genreService:GenreService) { }

  ngOnInit(): void {
    this.genreService.getAllGenres().subscribe(value => this.genres = value.genres )
  }

}
