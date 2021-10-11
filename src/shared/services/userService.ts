import config from "../../config.js"
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  logIn(username: string, password: string) {
    const data = {
      username: username,
      password: password,
    };
    return this.http.post<User>(config.api.url + '/user/signup', data);
  }

  resetPasswordViaEmail(email: string, DNI: string) {
    const data = {
      email: email,
      DNI: DNI,
    };
    return this.http.post(config.api.url + '/user/reset_password/', data);
  }

  resetPasswordEmailResponse(uid: bigint, token: string, newPass: string, re_newPass: string) {
    const data = {
      uid: uid,
      token: token,
      new_password: newPass,
      re_new_password: re_newPass
    };
    return this.http.post(config.api.url + 'user/reset_password_confirm/', data);
  }

  registerUser(username: string, fullName: string, DNI: string, password: string, email: string, re_password: string) {
    const data = {
      username: username,
      fullName: fullName,
      DNI: DNI,
      password: password,
      re_password: re_password,
      email: email
    };
    return this.http.post<User>(config.api.url + '/user', data);
  }
}

