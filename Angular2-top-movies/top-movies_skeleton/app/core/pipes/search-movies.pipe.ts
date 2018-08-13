import { Pipe, PipeTransform } from '@angular/core';

import { Movie } from './../models/movie.model';

@Pipe({name: 'searchMovies'})
export class SearchMoviesPipe implements PipeTransform {
	transform(items: Movie[], filterValue: string = ''): Movie[] {
		if (!items || !items.length) return;
		return items.filter(v =>
			v.Title.toLocaleLowerCase().match(filterValue.toLowerCase())
		);
	}
}