import {
  ActionReducerMap,
  createFeatureSelector, createSelector,
} from '@ngrx/store';
import {facilityReducer, FacilityState} from "./reducers/facility.reducer";
import {activityReducer, ActivityState} from "./reducers/activity.reducer";


export interface AppState {
  facility: FacilityState,
  activities: ActivityState
}

export const reducers: ActionReducerMap<AppState> = {
  facility: facilityReducer,
  activities: activityReducer
};

export const getFacilityState = createFeatureSelector<FacilityState>('facilities');
export const getFacilities = createSelector(
  getFacilityState,
  (state: FacilityState) => state.facilities
);

export const getActivityState = createFeatureSelector<ActivityState>('activities');
export const getActivities = createSelector(
  getActivityState,
  (state: ActivityState) => state.activities
);


// export const getExerciseState = createFeatureSelector<ExerciseState>('exercises');
// export const getExercises = createSelector(getExerciseState, state => state.exercises);

