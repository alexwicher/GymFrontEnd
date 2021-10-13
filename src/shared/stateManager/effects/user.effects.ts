import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as serviceAction from "../actions/user.actions";
import {catchError, map, switchMap} from "rxjs/operators";
import {of as observableOf} from 'rxjs';
import {User} from "../../models/User";
import {UserService} from "../../services/userService";

@Injectable()
export class UserEffects {
  constructor(private dataService: UserService, private actions$: Actions) {
  }

  loadRequestRegisterEffect$ = createEffect(() => this.actions$.pipe(
    ofType(serviceAction.requestUserRegister),
    switchMap(action => {
      return this.dataService.registerUser(action.userName, action.fullName, action.DNI, action.password, action.email, action.re_password).pipe(
        map((user: User) => {
          return serviceAction.sucessUserRegister({user});
        }),
        catchError(error => {
          return observableOf(serviceAction.failUserRegister({error}));
        })
      )
    })
  ))

  loadRequestLogInEffect$ = createEffect(() => this.actions$.pipe(
    ofType(serviceAction.requestUserLogin),
    switchMap(action => {
      return this.dataService.logIn(action.userName, action.password).pipe(
        map((user: User) => {
          return serviceAction.sucessUserLogin({user});
        }),
        catchError(error => {
          return observableOf(serviceAction.failUserLogin({error}));
        })
      )
    })
  ))

  loadRequestResetPassEffect$ = createEffect(() => this.actions$.pipe(
    ofType(serviceAction.requestPasswordReset),
    switchMap(action => {
      return this.dataService.resetPasswordViaEmail(action.email, action.DNI).pipe(
        map(() => {
          return serviceAction.passwordResetSuccess();
        }),
        catchError(error => {
          return observableOf(serviceAction.failPasswordReset({error}));
        })
      )
    })
  ))

  loadRequestResetPassConfirmEffect$ = createEffect(() => this.actions$.pipe(
    ofType(serviceAction.requestPasswordResetConfirm),
    switchMap(action => {
      return this.dataService.resetPasswordEmailResponse(action.uid, action.token, action.pass, action.re_pass).pipe(
        map(() => {
          return serviceAction.sucessPasswordConfirm();
        }),
        catchError(error => {
          return observableOf(serviceAction.failPasswordResetConfirm({error}));
        })
      )
    })
  ))

}
