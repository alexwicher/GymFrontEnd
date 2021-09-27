import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as activityActions from "../actions/activity.actions";
import {catchError, map, switchMap} from "rxjs/operators";
import {of as observableOf} from 'rxjs';
import {ActivitiesService} from "../../services/activitiesService";

@Injectable()
export class ActivityEffects {
  constructor(private dataService: ActivitiesService, private actions$: Actions) {
  }

  loadRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(activityActions.requestActivityList),
    switchMap(action => {
      return this.dataService.getAllActivities().pipe(
        map((activities: any[]) => {
          return activityActions.successActivityList({activities});
        }),
        catchError(error => {
          return observableOf(activityActions.errorActivityList({error}));
        })
      )

    })
  ))
}
