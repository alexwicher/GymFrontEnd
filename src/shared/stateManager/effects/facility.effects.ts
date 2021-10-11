import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as facilityActions from "../actions/facility.actions";
import {catchError, map, switchMap} from "rxjs/operators";
import {of as observableOf} from 'rxjs';
import {FacilityService} from "../../services/facilityService";
import {Facility} from "../../models/Facility";

@Injectable()
export class FacilityEffects {
  constructor(private dataService: FacilityService, private actions$: Actions) {
  }

  loadRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(facilityActions.requestFacilityList),
    switchMap(action => {
      return this.dataService.getAllFacilities().pipe(
        map((facilities: Facility[]) => {
          return facilityActions.successFacilityList({facilities});
        }),
        catchError(error => {
          return observableOf(facilityActions.errorFacilityList({error}));
        })
      )

    })
  ))
}
