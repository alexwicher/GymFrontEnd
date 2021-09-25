import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {requestFacilityList} from "../../shared/stateManager/actions/facility.actions";
import {getFacilities} from "../../shared/stateManager/reducers";
import {Observable} from "rxjs";
import {Facility} from "../../shared/models/Facility";

@Component({
  selector: 'facilities-list',
  templateUrl: './facilitiesList.component.html',
  // styleUrls: ['./app.component.css']
})
export class FacilitiesListComponent implements OnInit {
  title = 'GymFrontEnd';
  facilities: Observable<Facility[]>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(requestFacilityList())
    this.facilities = this.store.select(getFacilities)
  }

}
