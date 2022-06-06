import {Component, Input, OnInit} from '@angular/core';
import {IMovie} from "../../../interfaces/IMovie";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
@Input()
movie:IMovie
  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }



}
