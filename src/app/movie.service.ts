import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../movie';
import { Actor } from '../actors';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiKey = '647291f1643e9d0dcf96d391a7fd31';
  private topRatedMovieUrl = `
https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}&language=en-US&page=1`;

  constructor() { }

  getTopRatedMovies(): Movie []  {
    return MOVIES;
  }

  getActor(): Observable<Actor[]> {
    return of (ACTOR);
  }



}
