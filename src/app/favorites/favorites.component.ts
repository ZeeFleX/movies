import { Component, OnInit } from '@angular/core';

import { MoviesService }  from '../movies.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

 	constructor(public service: MoviesService) { }

 	ngOnInit() {
  		this.service.getFavorites()
  	}

}
