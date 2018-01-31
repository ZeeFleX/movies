import { Component, OnInit, Input } from '@angular/core'
import { MoviesService } from '../movies.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

	searchStr: string = ''
	minLength: number = 3
	moviesArray: object[] = []
	timer: number

  	constructor(public service: MoviesService) { }

  	handleChange() {
  		if (this.minLength <= this.searchStr.length) {
  			clearTimeout(this.timer);
  			this.timer = setTimeout(() => {
	  			this.service.getMovies(this.searchStr)
	  				.subscribe( response => {
	  					this.moviesArray = response.Search
	  				})
  			}, 500)
  		}
  	}

  	ngOnInit() {
  	}
}
