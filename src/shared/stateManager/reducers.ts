import {
  ActionReducerMap,
  createFeatureSelector, createSelector,
} from '@ngrx/store';
import {facilityReducer, FacilityState} from "./reducers/facility.reducer";
import {activityReducer, ActivityState} from "./reducers/activity.reducer";
import {PasswordResetConfirmState, userloginReducer, UserState} from "./reducers/user.reducers";


export interface AppState {
  facility: FacilityState,
  activities: ActivityState,
  user: UserState,
}

export const reducers: ActionReducerMap<AppState> = {
  facility: facilityReducer,
  activities: activityReducer,
  user: userloginReducer
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

export const getUserState = createFeatureSelector<UserState>('user');
export const getLoggedUser = createSelector(getUserState,
  (state: UserState) => state.user
);
export const isUserLoggedIn = createSelector(
  getUserState,
  (state: UserState) => state.user !== null
);
export const getUserJWT = createSelector(
  getUserState,
  (state: UserState) => state.user?.sessionJWT
);


