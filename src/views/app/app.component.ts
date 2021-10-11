import { Component } from '@angular/core';
import {NgbConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'GymFrontEnd';

  constructor(ngbConfig: NgbConfig) {
    ngbConfig.animation = false;
  }

}
