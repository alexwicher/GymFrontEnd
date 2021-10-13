// ---------------- Register ----------------

import {
  FAIL_USER_LOGIN,
  FAIL_USER_REGISTER,
  JWT_USER_LOGOUT,
  PASSWORD_CONFIRM_RESET_FAIL,
  PASSWORD_CONFIRM_RESET_REQUEST,
  PASSWORD_CONFIRM_RESET_SUCESS,
  PASSWORD_RESET_FAIL,
  PASSWORD_RESET_REQUEST, PASSWORD_RESET_SUCESS,
  REQUEST_USER_LOGIN,
  REQUEST_USER_REGISTER, SUCESS_USER_LOGIN,
  SUCESS_USER_REGISTER
} from "../actionTypes";
import {createAction, props} from "@ngrx/store";
import {User} from "../../models/User";

// ---------------- Register ----------------

export const requestUserRegister = createAction(
  REQUEST_USER_REGISTER,
  props<{ userName: string, fullName: string, DNI: string, password: string, email: string, re_password: string }>()
);

export const sucessUserRegister = createAction(
  SUCESS_USER_REGISTER,
  props<{ user: User }>()
);

export const failUserRegister = createAction(
  FAIL_USER_REGISTER,
  props<{ error: string }>()
);

// ---------------- Register ----------------

// ---------------- Log-in/Out ----------------

export const requestUserLogin = createAction(
  REQUEST_USER_LOGIN,
  props<{ userName: string, password: string }>()
);

export const sucessUserLogin = createAction(
  SUCESS_USER_LOGIN,
  props<{ user: User }>()
);

export const failUserLogin = createAction(
  FAIL_USER_LOGIN,
  props<{ error: string }>()
);

export const logOutUser = createAction(
  JWT_USER_LOGOUT,
);

// ---------------- Log-in/Out ----------------


// ---------------- Password reset ----------------

export const requestPasswordReset = createAction(
  PASSWORD_RESET_REQUEST,
  props<{ email: string, DNI: string }>()
);

export const failPasswordReset = createAction(
  PASSWORD_RESET_FAIL,
  props<{ error: string }>()
);

export const passwordResetSuccess = createAction(
  PASSWORD_RESET_SUCESS,
);

// ---------------- Password reset ----------------

// ---------------- Password reset confirm ----------------

export const requestPasswordResetConfirm = createAction(
  PASSWORD_CONFIRM_RESET_REQUEST,
  props<{ uid: bigint, token: string, pass: string, re_pass: string }>()
);

export const sucessPasswordConfirm = createAction(
  PASSWORD_CONFIRM_RESET_SUCESS,
);

export const failPasswordResetConfirm = createAction(
  PASSWORD_CONFIRM_RESET_FAIL,
  props<{ error: string }>()
);

// ---------------- Password reset confirm ----------------
