import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { MovieResponse } from '../movie';

@Component({
  selector: 'app-top-rated-movies-list',
  templateUrl: './top-rated-movies-list.component.html',
  styleUrls: ['./top-rated-movies-list.component.css']
})
export class TopRatedMoviesListComponent implements OnInit {

  title: string = "Top rated movies here";
  response: MovieResponse;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getTopRatedMovies();
  }

  getTopRatedMovies(): void {
    this.movieService.getTopRatedMovies()
    // clone the data object, using its known shape
    .subscribe((data: MovieResponse) => this.response = { ...data });
  }
}
