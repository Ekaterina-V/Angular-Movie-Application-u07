import { Component, OnInit } from '@angular/core';
import { MovieDetail } from '../movie';
import { ActivatedRoute } from '@angular/router'; // содержит информацию о маршруте связанную с компонентом, который загружен в outlet
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: MovieDetail;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getMovieDetail();
  }

  getMovieDetail(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieDetail(id)
      .subscribe((data: any) => this.movie = {
        title: data.title,
        budget: data.budget,
        id: data.id,
        poster_path: data.poster_path,
        popularity: data.popularity,
        release_date: data.release_date,
        vote_average: data.vote_average,
      });
  }

}
