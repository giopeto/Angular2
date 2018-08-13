import { Routes } from '@angular/router';

import { MoviesListComponent } from './movies/movies-list.component';
import { MvdbListMovieDetailComponent } from './mvdb-list-movie-detail/mvdb-list-movie-detail.component';

export const appRoutes:Routes = [
	{path: '', redirectTo: '/movies/top', pathMatch: 'full'},
	{path: 'movies/top', component: MoviesListComponent},
	{path: 'movies/search', component: MoviesListComponent},
	{path: 'movie/:imdbID', component: MvdbListMovieDetailComponent}
];