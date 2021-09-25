import {createAction, props} from '@ngrx/store';
import {Facility} from "../../models/Facility";
import {ERROR_FACILITY_LIST, REQUEST_FACILITY_LIST, SUCCESS_FACILITY_LIST} from "../actionTypes";

export const errorFacilityList = createAction(
  ERROR_FACILITY_LIST,
  props<{ error: string }>()
);

export const requestFacilityList = createAction(
  REQUEST_FACILITY_LIST
);

export const successFacilityList = createAction(
  SUCCESS_FACILITY_LIST,
  props<{ facilities: Facility[] }>()
);

