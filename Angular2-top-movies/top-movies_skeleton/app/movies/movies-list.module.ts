import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesListComponent } from './movies-list.component';

@NgModule({
	imports: [CommonModule],
	declarations: [MoviesListComponent],
	exports: [MoviesListComponent]
})
export class MovieListModule {
}
