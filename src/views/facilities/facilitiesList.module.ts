import {NgModule} from '@angular/core';

import {FacilitiesListComponent} from './facilitiesList.component';
import {StoreModule} from "@ngrx/store";
import {reducers} from "../../shared/stateManager/reducers";
import {EffectsModule} from "@ngrx/effects";
import {FacilityEffects} from "../../shared/stateManager/effects/facility.effects";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FacilitiesService} from "../../shared/services/facilitiesService";
import {facilityStore} from "../../shared/stateManager/reducers/facility.reducer";

const routes = [{path: 'facilities', component: FacilitiesListComponent}]

@NgModule({
  declarations: [
    FacilitiesListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature("facilities",facilityStore),
    EffectsModule.forFeature([FacilityEffects])
  ],
  providers: [FacilitiesService],
  // bootstrap: [FacilitiesListComponent]
})
export class FacilitiesListModule {
}
