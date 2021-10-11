import {Store} from "@ngrx/store";
import {Component, ViewEncapsulation} from "@angular/core";


@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    '../../../node_modules/bootstrap/dist/css/bootstrap.css'
  ],
})
export class TopBarComponent {

  constructor(private store: Store) {
  }

}
