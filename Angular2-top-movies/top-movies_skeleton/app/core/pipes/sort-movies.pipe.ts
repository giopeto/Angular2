import { Pipe, PipeTransform } from '@angular/core';

import { Movie } from './../models/movie.model';

function isNumber(n: any): boolean {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

@Pipe({name: 'sortMovies'})
export class SortMoviesPipe implements PipeTransform {
	transform(items: Movie[], sort: string = 'Title', isDesc: boolean = true): Movie[] {
		if (!items || !items.length) return;
		return items.sort((a, b)=> {
			if(isNumber( (<any>a)[sort] )){
				if(isDesc){
					return parseFloat((<any>b)[sort]) - parseFloat((<any>a)[sort])
				}else{
					return parseFloat((<any>a)[sort]) - parseFloat((<any>b)[sort])
				}
			} else {
				return (<any>a)[sort].localeCompare((<any>b)[sort]);
			}
		});
	}
}