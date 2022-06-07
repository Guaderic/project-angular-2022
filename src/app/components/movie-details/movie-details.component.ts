import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../../services/movie.service";
import {IMovie} from "../../interfaces/IMovie";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie:IMovie
  form:  FormGroup
  comment:string[]= []
  year = new Date().getUTCFullYear()
  hours = new Date().getHours()
  minutes = new Date().getMinutes()

  constructor(private route:ActivatedRoute, private movieService:MovieService) { }


  ngOnInit(): void {
    this.route.params.subscribe(({id})=>{
      this.movieService.getById(id).subscribe(value => this.movie = value)
    })

    this.form = new FormGroup({
      'setComment': new FormControl('')
    })

  }

  setComment() {
    let value = Object.values(this.form.value)
    let value2 = value.toString()
    this.comment.push(value2)



  }
}
