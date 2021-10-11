import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login.component";
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  imports: [CommonModule, RouterModule, NgbDropdownModule, FontAwesomeModule],
  declarations: [LoginComponent],
  exports: [
    LoginComponent
  ]
})

export class LoginModule {
}
