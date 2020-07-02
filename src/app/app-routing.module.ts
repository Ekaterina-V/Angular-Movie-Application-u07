import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopRatedMoviesListComponent } from './top-rated-movies-list/top-rated-movies-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';
import { SearchFormComponent } from './search-form/search-form.component';


const routes: Routes = [
{ path: 'topmovies', component: TopRatedMoviesListComponent, data: { title: 'Top Rated Movies' } },
{ path: 'moviedetail', component: MovieDetailComponent, data: { title: 'Movie Detail' } },
{ path: 'actors', component: ActorDetailComponent, data: { title: 'Actors' } }, 
{ path: 'search', component: SearchFormComponent, data: { title: 'Search' } },
{ path: '', redirectTo: '/topmovies' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
