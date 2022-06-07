import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SearchService} from "../../../services/search.service";
import {IMovie} from "../../../interfaces/IMovie";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-film',
  templateUrl: './search-film.component.html',
  styleUrls: ['./search-film.component.css']
})
export class SearchFilmComponent implements OnInit {
  searchForm:FormGroup
  movies:IMovie[]
  query:string=''

  constructor(private service:SearchService, private router:Router) { }

  ngOnInit(): void {



    this.searchForm = new FormGroup({
      'searchFilm':new FormControl('')

    })

  }

  SubmitSearch() {
    this.router.navigate(['search'])
    const value = Object.values(this.searchForm.value)
    const value2= value.toString()
    console.log(value2)
    this.query = value2

    this.service.searchMovie(this.query).subscribe(value => this.movies = value.results)
  }

}
