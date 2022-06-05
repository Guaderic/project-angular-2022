import {Component, Input, OnInit} from '@angular/core';
import {IGenre} from "../../interfaces/IGenre";


import {ActivatedRoute} from "@angular/router";
import {GenreService} from "../../services/genre.service";
import {IMovie} from "../../interfaces/IMovie";
import {IMovies} from "../../interfaces/IMovies";




@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  @Input()
  genre: IGenre;
  movies:IMovie[]
  id: number;





  constructor(private genreService:GenreService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {

  }


  getFilmByGenre(id:number) {
    this.genre.id = id;
   this.genreService.getById(id).subscribe(value => this.movies = value.results)

  }
}






