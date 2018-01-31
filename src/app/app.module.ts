import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { MatToolbarModule, MatInputModule, MatGridListModule, MatCardModule, MatButtonModule } from '@angular/material'

import { MoviesService } from './movies.service'


import { AppComponent } from './app.component'
import { ToolbarComponent } from './toolbar/toolbar.component'
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './/app-routing.module';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FavoritesComponent } from './favorites/favorites.component'


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SearchComponent,
    MovieDetailsComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
