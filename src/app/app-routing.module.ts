import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent }      from './search/search.component';
import { MovieDetailsComponent }      from './movie-details/movie-details.component';

const routes: Routes = [
	{ path: '', redirectTo: '/movies', pathMatch: 'full' },
  	{ path: 'movies', component: SearchComponent },
  	{ path: 'movie/:id', component: MovieDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}