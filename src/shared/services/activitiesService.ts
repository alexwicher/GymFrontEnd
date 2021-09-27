import config from "../../config.js"
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import {Activity} from "../models/Activity";

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private http: HttpClient) {
  }

  getAllActivities() {
    return this.http.get<Activity[]>(config.api.url + '/activities');
  }
}

