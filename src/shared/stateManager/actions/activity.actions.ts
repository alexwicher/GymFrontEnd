import {createAction, props} from '@ngrx/store';
import {Activity} from "../../models/Activity";
import {
  ERROR_ACTIVITY_LIST,
  REQUEST_ACTIVITY_LIST,
  SUCCESS_ACTIVITY_LIST,
} from "../actionTypes";

export const errorActivityList = createAction(
  ERROR_ACTIVITY_LIST,
  props<{ error: string }>()
);

export const requestActivityList = createAction(
  REQUEST_ACTIVITY_LIST
);

export const successActivityList = createAction(
  SUCCESS_ACTIVITY_LIST,
  props<{ activities: Activity[] }>()
);

