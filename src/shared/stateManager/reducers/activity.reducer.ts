import {Action, createReducer, on} from '@ngrx/store';
import * as ActivityActions from '../actions/activity.actions';

import {Activity} from "../../models/Activity";

export interface ActivityState {
  activities: Activity[];
  loading: boolean;
  error: string;
}

export const initialState: ActivityState = {
  loading: false, activities: [], error: ''
};

export const activityReducer = createReducer(
  initialState,
  on(ActivityActions.requestActivityList,
    (state: ActivityState) =>
      ({
        ...state, loading: true
      }))
  , on(ActivityActions.successActivityList,
    (state: ActivityState, action) =>
      ({
        ...state, loading: false, activities: action.activities
      }))
  , on(ActivityActions.errorActivityList,
    (state: ActivityState, action) =>
      ({
        ...state, loading: false, error: action.error
      }))
);

export function activityStore(state: ActivityState | undefined, action: Action): any {
  return activityReducer(state, action);
}

