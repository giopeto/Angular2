import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieShortComponent } from './movie-short.component';

@NgModule({
	selector: '[mvdb-movie-short]',
	declarations: [MovieShortComponent],
	exports: [MovieShortComponent],
	providers: [],
})

export class MovieShortModule {}