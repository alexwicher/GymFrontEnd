import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login.component";
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {UserEffects} from "../../shared/stateManager/effects/user.effects";
import {userResetStore} from "../../shared/stateManager/reducers/user.reducers";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const routes = [{path: 'logIn', component: LoginComponent}]


@NgModule({
  imports: [CommonModule,
    RouterModule,
    NgbDropdownModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature("user", userResetStore),
    EffectsModule.forFeature([UserEffects]), FormsModule, ReactiveFormsModule,
  ],
  declarations: [LoginComponent],
  exports: [
    LoginComponent
  ]
})

export class LoginModule {
}
