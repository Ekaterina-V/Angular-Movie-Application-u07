import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopRatedMoviesListComponent } from './top-rated-movies-list/top-rated-movies-list.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
//import { ActorDetailComponent } from './actor-detail/actor-detail.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
//import { FavouriteMoviesComponent } from './favourite-movies/favourite-movies.component';
import { MovieService } from './movie.service';
import { ActorSearchComponent } from './actor-search/actor-search.component';

@NgModule({
  declarations: [
    AppComponent,
    TopRatedMoviesListComponent,
    HomeComponent,
    MovieDetailComponent,
    //ActorDetailComponent,
    MovieSearchComponent,
    NavbarComponent,
    //FavouriteMoviesComponent,
    ActorSearchComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    MovieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
