import {Action, combineReducers, createReducer, on} from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import {User} from 'src/shared/models/User';
import {facilityReducer, FacilityState} from "./facility.reducer";


export interface UserState {
  user: User | null;
  loading: boolean;
  error: string;
}

export const initialStateUser: UserState = {
  loading: false, user: null, error: ''
};

export const userRegisterReducer = createReducer(
  initialStateUser,
  on(UserActions.requestUserRegister,
    (state: UserState, action) =>
      ({
        ...state, loading: true,
      }))
  , on(UserActions.sucessUserRegister,
    (state: UserState, action) =>
      ({
        ...state, loading: false, user: action.user
      }))
  , on(UserActions.failUserRegister,
    (state: UserState, action) =>
      ({
        ...state, loading: false, error: action.error
      }))
);

export const userloginReducer = createReducer(
  initialStateUser,
  on(UserActions.requestUserLogin,
    (state: UserState) =>
      ({
        ...state, loading: true
      }))
  , on(UserActions.sucessUserLogin,
    (state: UserState, action) =>
      ({
        ...state, loading: false, user: action.user
      }))
  , on(UserActions.failUserLogin,
    (state: UserState, action) =>
      ({
        ...state, loading: false, error: action.error
      }))
);

export interface PasswordResetState {
  loading: boolean;
  email: string;
  DNI: string;
  error: string;
}

export const passwordResetInitState: PasswordResetState = {
  loading: false, email: '', DNI: '', error: ''
};

export const passwordResetReducer = createReducer(
  passwordResetInitState,
  on(UserActions.requestPasswordReset,
    (state: PasswordResetState) =>
      ({
        ...state, loading: true
      }))
  , on(UserActions.passwordResetSuccess,
    (state: PasswordResetState) =>
      ({
        ...state, loading: false
      }))
  , on(UserActions.failPasswordReset,
    (state: PasswordResetState, action) =>
      ({
        ...state, loading: false, error: action.error
      }))
);

export interface PasswordResetConfirmState {
  uid: bigint | null;
  token: string;
  pass: string;
  re_pass: string
  loading: boolean;
  error: string;
}

export const passwordResetConfirmInitState: PasswordResetConfirmState = {
  uid: null, token: '', pass: '', re_pass: '', loading: false, error: ''
};

export const passwordConfirmResetReducer = createReducer(
  passwordResetConfirmInitState,
  on(UserActions.requestPasswordResetConfirm,
    (state: PasswordResetConfirmState) =>
      ({
        ...state, loading: true,
      }))
  , on(UserActions.sucessPasswordConfirm,
    (state: PasswordResetConfirmState) =>
      ({
        ...state, loading: false
      }))
  , on(UserActions.failPasswordResetConfirm,
    (state: PasswordResetConfirmState, action) =>
      ({
        ...state, loading: false, error: action.error
      }))
);

export function userStore(state: UserState | undefined, action: Action): any {
  return userloginReducer(state, action);
}

export function userRegisterStore(state: UserState | undefined, action: Action): any {
  return userRegisterReducer(state, action);
}

export function userResetStore(state: PasswordResetState | undefined, action: Action): any {
  return passwordResetReducer(state, action);
}

export function userResetConfirmStore(state: PasswordResetConfirmState | undefined, action: Action): any {
  return passwordConfirmResetReducer(state, action);
}
