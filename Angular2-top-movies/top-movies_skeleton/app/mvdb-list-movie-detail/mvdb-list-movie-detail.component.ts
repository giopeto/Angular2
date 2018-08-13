import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

import { Movie } from './../core/models/movie.model';
import { MovieService } from './../core/services/movie.service';

@Component({
  selector: 'app-mvdb-list-movie-detail',
  templateUrl: './mvdb-list-movie-detail.component.html',
  styleUrls: ['./mvdb-list-movie-detail.component.css']
})
export class MvdbListMovieDetailComponent {
  private movie: Movie;
  private imdbID: string;
  private errorMessage: string;

  private sub: any;
  private mode: string;

  constructor(private http: Http, private movieService: MovieService, private route: ActivatedRoute) { }

  getMoviesByImdbID() {
   this.movieService
        .getMoviesByImdbID(this.imdbID)
        .subscribe(
            params => this.movie = params.movies,
            error => this.errorMessage = <any>error
        );
  }

  ngOnInit() {
    this.sub = this.route
        //.queryParams
        .params
        .subscribe(params => {
          //console.log("ASD DDD: ", params[imdbID]);
          this.imdbID = params['imdbID'];
          this.getMoviesByImdbID();
        });
  }

}
