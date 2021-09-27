import {NgModule} from '@angular/core';

import {ActivitiesListComponent} from './activitiesList.component';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {ActivitiesService} from "../../shared/services/activitiesService";
import {activityStore} from "../../shared/stateManager/reducers/activity.reducer";
import {ActivityEffects} from "../../shared/stateManager/effects/activity.effects";

const routes = [{path: 'activities', component: ActivitiesListComponent}]

@NgModule({
  declarations: [
    ActivitiesListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature("activities", activityStore),
    EffectsModule.forFeature([ActivityEffects])
  ],
  providers: [ActivitiesService],
})
export class ActivitiesListModule {
}
