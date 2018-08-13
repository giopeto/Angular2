import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

import { Movie } from './../core/models/movie.model';
import { MovieService } from './../core/services/movie.service';

@Component({
	selector: 'mvdb-list',
	templateUrl: "./movies-list.component.html"
})

export class MoviesListComponent {

	private movies:Movie[] = [];
	private errorMessage:string;
	private searchString:string;
	private pageNum:number = 1;
	private allPages:number = 0;
	private totalResults:number = 0;
	private order:boolean;
	private sort:string;
	private title:string = '';
	private sub:any;
	private mode:string;
	private sortCombo:{ id: string, name: string }[] = [
		{id: "Year", name: "Year"},
		{id: "imdbRating", name: "Rating"},
		{id: "Title", name: "Title"}
	];
	private orderCombo:{ id: string, name: string }[] = [
		{id: "desc", name: "Desc"},
		{id: "asc", name: "Asc"}
	];

	constructor(private http:Http, private movieService:MovieService, private route:ActivatedRoute) {}

	getMovies() {
		this.movieService
			.getMovies(this.mode, this.searchString, this.pageNum)
			.subscribe(
				params => {
					this.movies = this.movies.concat(params.movies);
					this.totalResults = params.totalResults;
					if (this.totalResults > 0) {
						this.allPages = Math.floor(this.totalResults / 10) + 1;
					}
				},
				error => this.errorMessage = <any>error
			);
	}

	ngOnInit() {
		this.sub = this.route
			.queryParams
			.subscribe(params => {
				this.mode = params['mode'] ? params['mode'] : 'top';
			});
		if (this.mode === 'top') {
			this.title = 'Top 10 IMDB Movies';
			this.getMovies();
		} else if (this.mode === 'search') {
			this.title = 'Search movies by title';
		}
	}

	onInput(e:any) {
		this.searchString = e.target.value;
		if (this.mode === 'search' && this.searchString.length > 1) {
			this.movies = [];
			this.getMovies();
		}
	}

	onOrderChange(e:any) {
		this.order = e.target.value === 'desc' ? true : false;
	}

	onSortChange(e:any) {
		this.sort = e.target.value;
	}

	onScroll() {
		if (this.mode === 'search' && this.allPages > 0 && this.allPages > this.pageNum) {
			this.pageNum++;
			this.getMovies();
		}
	}

}