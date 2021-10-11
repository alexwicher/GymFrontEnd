import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {TopBarComponent} from "./top-bar.component";
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [CommonModule, RouterModule, NgbDropdownModule],
  declarations: [TopBarComponent],
  exports: [
    TopBarComponent
  ]
})

export class TopBarModule {
}
