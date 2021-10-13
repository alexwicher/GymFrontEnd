import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import {AlertComponent} from "./alert.component";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [RouterModule, NgbDropdownModule, CommonModule],
  declarations: [AlertComponent],
  exports: [
    AlertComponent
  ]
})

export class AlertModule {
}
