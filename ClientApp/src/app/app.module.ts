import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { SuicideSquadComponent } from './suicidesquad/suicidesquad.component';
import { JungleCruiseComponent } from './junglecruise/junglecruise.component';
import { ComingSoonComponent } from './comingsoon/comingsoon.component';
import { PawPatrolComponent } from './pawpatrol/pawpatrol.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    JungleCruiseComponent,
    SuicideSquadComponent,
    ComingSoonComponent,
    PawPatrolComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'comingsoon', component: ComingSoonComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'movies/junglecruise', component: JungleCruiseComponent },
      { path: 'movies/suicidesquad', component: SuicideSquadComponent },
      { path: 'movies/pawpatrol', component: PawPatrolComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
