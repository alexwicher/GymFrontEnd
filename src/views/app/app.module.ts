import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../../environments/environment';
import {EffectsModule} from "@ngrx/effects";
import {FacilitiesListModule} from "../facilities/facilitiesList.module";
import {TopBarModule} from "../top-bar/top-bar.module";
import {HttpClientModule} from "@angular/common/http";
import {reducers} from "../../shared/stateManager/reducers";
import {ActivitiesListModule} from "../activities/activitiesList.module";
import {NotFoundComponent} from "../notFound/notFound.component";
import {NotFoundModule} from "../notFound/notFound.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes = [
  {path: '', component: AppComponent},
  {path: '**', component: NotFoundComponent}
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    TopBarModule,
    FacilitiesListModule,
    NotFoundModule,
    ActivitiesListModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
