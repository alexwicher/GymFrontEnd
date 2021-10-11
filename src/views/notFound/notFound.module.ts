import {NgModule} from '@angular/core';

import {NotFoundComponent} from './notFound.component';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {FacilityEffects} from "../../shared/stateManager/effects/facility.effects";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FacilitiesService} from "../../shared/services/facilitiesService";
import {facilityStore} from "../../shared/stateManager/reducers/facility.reducer";

const routes = [{path: 'facilities', component: NotFoundComponent}]

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
})
export class NotFoundModule {
}
