import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { SearchDirective } from './directives/search.directive';

import { SearchPipe } from './pipes/search.pipe';

import { AppComponent } from './app.component';
import { EventParticipantsListComponent } from './event-participants-list/event-participants-list.component';
import { EventParticipantsDetailComponent } from './event-participants-detail/event-participants-detail.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { RatingComponent } from './rating/rating.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    EventParticipantsListComponent,
    EventParticipantsDetailComponent,
    FavoritesComponent,
    RatingComponent,
    SearchComponent,
    SearchDirective,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SearchPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
