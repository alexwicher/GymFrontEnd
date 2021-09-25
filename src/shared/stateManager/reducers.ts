import {
  createFeatureSelector, createSelector,
} from '@ngrx/store';
import {facilityReducer, FacilityState} from "./reducers/facility.reducer";


export const reducers = {
  facility: facilityReducer,
};

export const getFacilityState = createFeatureSelector<FacilityState>('userModule');
export const getFacilities = createSelector(
  getFacilityState,
  (state: FacilityState) => state.facilities
);


// export const getExerciseState = createFeatureSelector<ExerciseState>('exercises');
// export const getExercises = createSelector(getExerciseState, state => state.exercises);

