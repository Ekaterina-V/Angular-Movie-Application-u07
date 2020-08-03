import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieService } from '../movie.service';
import { ActorResult } from '../actor';

@Component({
  selector: 'app-actor-search',
  templateUrl: './actor-search.component.html',
  styleUrls: ['./actor-search.component.css']
})
export class ActorSearchComponent implements OnInit {

  results: ActorResult[];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  onSubmit(searchForm: NgForm) {
    let actor = searchForm.value["actor"];
    this.movieService.searchActor(actor)
      .subscribe((data: any) => this.results = data.results.map((el: any) => {
        return {
          id: el.id,
          name: el.name
        }
      }));
  }

}
