import {Store} from "@ngrx/store";
import {Component, ViewEncapsulation} from "@angular/core";
import {faBars} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'top-bar',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    '../../../node_modules/bootstrap/dist/css/bootstrap.css',
  ],
})
export class LoginComponent {
  faBars = faBars
  constructor(private store: Store) {
  }
}
