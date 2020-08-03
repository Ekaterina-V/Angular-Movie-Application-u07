import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MovieService } from '../movie.service';
import { MovieResponse } from '../movie';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search-form',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  response: MovieResponse;
  private searchTerms = new Subject<string>();

  constructor(
    private movieService: MovieService) { }

  // Push a search term into the observable stream
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.movieService.searchMovie(term)),
    )
    .subscribe((data: MovieResponse) => this.response = { ...data });
  }
}