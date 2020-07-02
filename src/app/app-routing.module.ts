import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopRatedMoviesListComponent } from './components/top-rated-movies-list/top-rated-movies-list.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { ActorDetailComponent } from './components/actor-detail/actor-detail.component';
import { SearchFormComponent } from './components/search-form/search-form-detail.component';


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
