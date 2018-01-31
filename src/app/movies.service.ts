import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import { Injectable } from '@angular/core'

@Injectable()

export class MoviesService {

	Storage: any = window.localStorage
	favoriteMovies: any[] = []

	constructor(private http: Http) {

	}

	getMovies(moviename: string): Observable<any>{
		if(this.Storage.getItem('favorites')) this.favoriteMovies = JSON.parse( this.Storage.getItem('favorites') )
		return this.http.get(`http://www.omdbapi.com/?apikey=af3843e3&plot=full&s=${moviename}`)
			.map((response: Response) => {
				
				let movies: any = response.json()

				movies.Search.forEach( (movie, k) => {
					movie.favorite = false
					this.favoriteMovies.forEach( (favoriteMovie, i) => {
						if(favoriteMovie.imdbID ===  movie.imdbID) movie.favorite = true
					})
				})
				return movies
			})

	}

	getMoviesById(moviename: string): Observable<any>{
		return this.http.get(`http://www.omdbapi.com/?apikey=af3843e3&plot=full&s=${moviename}`)
			.map((response: Response) => response.json())
	}

	getMovie(imdbId: string): Observable<any>{
		return this.http.get(`http://www.omdbapi.com/?apikey=af3843e3&plot=full&i=${imdbId}`)
			.map((response: Response) => response.json())
	}

	getFavorites() {
		if(this.Storage.getItem('favorites')) this.favoriteMovies = JSON.parse( this.Storage.getItem('favorites') )
	}

	addToFavorites(movie: object): void {
		if(this.Storage.getItem('favorites')) this.favoriteMovies = JSON.parse( this.Storage.getItem('favorites') )
		this.favoriteMovies.push(movie);
		this.Storage.setItem( 'favorites', JSON.stringify(this.favoriteMovies) )
	}

	removeFromFavorites(movie: any): void {
		this.favoriteMovies = this.favoriteMovies.filter((elem) => elem.imdbID !== movie.imdbID)
		this.Storage.setItem( 'favorites', JSON.stringify(this.favoriteMovies) )
	}
}