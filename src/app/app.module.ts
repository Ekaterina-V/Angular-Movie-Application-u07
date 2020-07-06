import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopRatedMoviesListComponent } from './top-rated-movies-list/top-rated-movies-list.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FavouriteMoviesComponent } from './favourite-movies/favourite-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    TopRatedMoviesListComponent,
    HomeComponent,
    MovieDetailComponent,
    ActorDetailComponent,
    SearchFormComponent,
    SearchResultComponent,
    FooterComponent,
    NavbarComponent,
    FavouriteMoviesComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
