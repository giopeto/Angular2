import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Movie } from './../models/movie.model';

@Injectable()
export class MovieService {
    private moviesUrl = '';
    constructor(private http: Http) { }

    getMovies(mode: string, search="", pageNum: number) {
        if(mode==='top'){
            this.moviesUrl = './../../data/movies.json';
        }else{
            this.moviesUrl = `http://www.omdbapi.com/?s=${search}&page=${pageNum}`;
        }

        return this.http.get(this.moviesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getMoviesByImdbID(imdbID: string){
        this.moviesUrl = `http://www.omdbapi.com/?i=${imdbID}&plot=full&r=json`;
        return this.http.get(this.moviesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        let movies = [];
        let totalResults = 0;

        if(body.Search){
            movies = body.Search;
        }else if(body.Error){
            movies = [];
        }else{
            movies=body;
        }

        if(body.totalResults){
            totalResults = body.totalResults;
        }

        var params = {movies: movies, totalResults: totalResults};
        return params || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }

        alert(errMsg);
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}