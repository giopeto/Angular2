import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Movie } from './../core/models/movie.model';

@Component({
	selector: '[mvdb-movie-short]',
	templateUrl: "./movie-short.component.html"
})

export class MovieShortComponent {
	@Input()
	movie:Movie;

	constructor(private appRoutes:Router) {}

	get imdbRating():string {
		return this.movie.imdbRating;
	}

	get poster():string {
		return this.movie.Poster;
	}

	get title():string {
		return this.movie.Title;
	}

	get year():string {
		return this.movie.Year;
	}

	get plot():string {
		return this.movie.Plot;
	}

	showInfo(args:{imdbID: number}) {
		this.appRoutes.navigate(['movie/', args.imdbID]);
	}

}