import { Component, OnInit } from '@angular/core';

//import { Movie } from '../top-rated-movies-list.services';

@Component({
  selector: 'app-top-rated-movies-list',
  templateUrl: './top-rated-movies-list.component.html',
  styleUrls: ['./top-rated-movies-list.component.css']
})
export class TopRatedMoviesListComponent implements OnInit {

  title:string;

  constructor() { }

  ngOnInit(): void {
  }

}
