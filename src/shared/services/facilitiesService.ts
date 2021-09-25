import config from "../../config.js"
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import {Facility} from "../models/Facility";

@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {

  constructor(private http: HttpClient) {
  }

  getAllFacilities() {
    return this.http.get<Facility[]>(config.api.url + '/facilities');
  }
}

