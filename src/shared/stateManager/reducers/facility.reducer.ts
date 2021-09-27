import {Action, createReducer, on} from '@ngrx/store';
import * as FacilityActions from '../actions/facility.actions';

import {Facility} from "../../models/Facility";

export interface FacilityState {
  facilities: Facility[];
  loading: boolean;
  error: string;
}

export const initialState: FacilityState = {
  loading: false, facilities: [], error: ''
};

export const facilityReducer = createReducer(
  initialState,
  on(FacilityActions.requestFacilityList,
    (state: FacilityState) =>
      ({
        ...state, loading: true
      }))
  , on(FacilityActions.successFacilityList,
    (state: FacilityState, action) =>
      ({
        ...state, loading: false, facilities: action.facilities
      }))
  , on(FacilityActions.errorFacilityList,
    (state: FacilityState, action) =>
      ({
        ...state, loading: false, error: action.error
      }))
);

export function facilityStore(state: FacilityState | undefined, action: Action): any {
  return facilityReducer(state, action);
}

