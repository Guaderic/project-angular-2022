import {Component, Input, OnInit} from '@angular/core';
import {IGenre} from "../../interfaces/IGenre";
import {MovieService} from "../../services/movie.service";

import {ActivatedRoute} from "@angular/router";



@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  @Input()
  genre: IGenre




  constructor(private movieService: MovieService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    
  }


}






