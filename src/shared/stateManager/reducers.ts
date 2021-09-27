import {
  ActionReducerMap,
  createFeatureSelector, createSelector,
} from '@ngrx/store';
import {facilityReducer, FacilityState} from "./reducers/facility.reducer";


export interface AppState {
  facility: FacilityState
}

export const reducers: ActionReducerMap<AppState> = {
  facility: facilityReducer,
};

export const getFacilityState = createFeatureSelector<FacilityState>('facilities');
export const getFacilities = createSelector(
  getFacilityState,
  (state: FacilityState) => state.facilities
);


// export const getExerciseState = createFeatureSelector<ExerciseState>('exercises');
// export const getExercises = createSelector(getExerciseState, state => state.exercises);

