import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MovieResponse, MovieDetail } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private api_key = 'api_key=647291f1643e9d0dcf96d391a7fd312c';
  private url = 'https://api.themoviedb.org/3';
 
  constructor(private httpClient: HttpClient) { }

  getTopRatedMovies() : Observable<MovieResponse> {
    return this.httpClient.get<MovieResponse>(`${this.url}/movie/top_rated?${this.api_key}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  searchMovie(term: string): Observable<MovieResponse> {
    //console.log(term);

    if (!term.trim()) {
      // if not search term, return Observable with undefined.
      return new Observable<undefined>();
    }

    return this.httpClient.get<MovieResponse>(`${this.url}/search/movie?${this.api_key}&query=${term}`)
      .pipe(
        catchError(this.handleError)
    );
  }

  searchActor(term: string): Observable<any> {
    //console.log(term);

    if (!term.trim()) {
      // if not search term, return Observable with undefined.
      return new Observable<undefined>();
    }

    return this.httpClient.get(`${this.url}/search/person?${this.api_key}&query=${term}`)
      .pipe(
        catchError(this.handleError)
    );
  }

  getMovieDetail(id: number) {
    return this.httpClient.get(`${this.url}/movie/${id}?${this.api_key}`)
      .pipe(
        catchError(this.handleError)
      );
  }

    getActorDetail(id: number) {
    return this.httpClient.get(`${this.url}/person/${id}?${this.api_key}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }

    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }

}
 