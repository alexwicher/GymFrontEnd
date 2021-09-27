import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState, getActivities} from "../../shared/stateManager/reducers";
import {Observable} from "rxjs";
import {Activity} from "../../shared/models/Activity";
import {requestActivityList} from "../../shared/stateManager/actions/activity.actions";

@Component({
  selector: 'activities-list',
  templateUrl: './activitiesList.component.html',
  // styleUrls: ['./app.component.css']
})
export class ActivitiesListComponent implements OnInit {
  title = 'GymFrontEnd';
  activities: Observable<Activity[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(requestActivityList())
    this.activities = this.store.select(getActivities)
  }

}
