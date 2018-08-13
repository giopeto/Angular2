import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';

import {Ng2BootstrapModule} from 'ng2-bootstrap/ng2-bootstrap';
import {RatingModule} from "ng2-rating";

import { AppComponent } from './app.component';
import { MvdbListHeaderComponent } from './mvdb-list-header/mvdb-list-header.component';
import { MvdbListFooterComponent } from './mvdb-list-footer/mvdb-list-footer.component';

import { MoviesListComponent } from './movies/movies-list.component';
import { MovieShortComponent } from './movies/movie-short.component';
import { MvdbListMovieDetailComponent } from './mvdb-list-movie-detail/mvdb-list-movie-detail.component';

import { MovieService } from './core/services/movie.service';

import { SearchMoviesPipe } from './core/pipes/search-movies.pipe';
import { SortMoviesPipe } from './core/pipes/sort-movies.pipe';

import { appRoutes } from './app.routes';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		InfiniteScrollModule,
		RatingModule,
		FormsModule,
		RouterModule.forRoot(appRoutes)
	],
	declarations: [
		AppComponent,
		MvdbListHeaderComponent,
		MvdbListFooterComponent,

		MoviesListComponent,
		MovieShortComponent,
		MvdbListMovieDetailComponent,

		SearchMoviesPipe,
		SortMoviesPipe
	],
	providers: [MovieService],
	bootstrap: [AppComponent]
})

export class AppModule {
}