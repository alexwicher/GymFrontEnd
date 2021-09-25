import {Store} from "@ngrx/store";
import {Component, OnInit} from "@angular/core";


@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  // styleUrls: ['./topBar.component.scss']
})
export class TopBarComponent {

  constructor(private store: Store) {
  }

}
