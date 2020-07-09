import { Component, OnInit } from '@angular/core';

import { Movie } from '../movie';

@Component({
  selector: 'app-top-rated-movies-list',
  templateUrl: './top-rated-movies-list.component.html',
  styleUrls: ['./top-rated-movies-list.component.css']
})
export class TopRatedMoviesListComponent implements OnInit {

  title: string = "Top rated movies";

  constructor() { }

  ngOnInit(): void {
  }

   
  

}
