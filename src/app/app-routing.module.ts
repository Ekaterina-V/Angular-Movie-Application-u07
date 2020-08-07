import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopRatedMoviesListComponent } from './top-rated-movies-list/top-rated-movies-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { ActorSearchComponent } from './actor-search/actor-search.component';
//import { FavouriteMoviesComponent } from './favourite-movies/favourite-movies.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'topmovies', component: TopRatedMoviesListComponent, data: { title: 'Top Rated Movies' } },
  { path: 'moviedetail/:id', component: MovieDetailComponent, data: { title: 'Movie Detail' } },
  { path: 'actordetail/:id', component: ActorDetailComponent, data: { title: 'Person' } }, 
  { path: 'moviesearch', component: MovieSearchComponent, data: { title: 'Movie Search' } },
  { path: 'actorsearch', component: ActorSearchComponent, data: { title: 'Actor Search' } },
  //{ path: 'favourite-movies', component: FavouriteMoviesComponent , data: { title: 'Favourite Movies' } },
  { path: '', redirectTo: '/topmovies', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }