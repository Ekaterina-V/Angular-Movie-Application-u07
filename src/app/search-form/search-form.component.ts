import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { Actor } from '../actor';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  movies: Movie[];

  actors: Actor[];


  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  
  }



}
