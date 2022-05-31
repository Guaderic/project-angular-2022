import {Component, Input, OnInit} from '@angular/core';
import {IMovie} from "../../interfaces/IMovie";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
@Input()
  movie:IMovie
  imagine:string = ''
  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  getDetails() {
    this.router.navigate([this.movie.id], {relativeTo: this.route})
  }
}
