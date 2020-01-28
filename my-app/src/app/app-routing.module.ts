import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventParticipantsListComponent } from './event-participants-list/event-participants-list.component';
import { EventParticipantsDetailComponent } from './event-participants-detail/event-participants-detail.component';
import { FavoritesComponent } from './favorites/favorites.component';

const routes: Routes = [
  { path: '', redirectTo:'/event-participants-list', pathMatch: 'full' },
  { path: 'event-participants-list', component: EventParticipantsListComponent },
  { path: 'detail/:id', component: EventParticipantsDetailComponent },
  { path: 'favorites', component: FavoritesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
