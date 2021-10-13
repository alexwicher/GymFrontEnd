import {Store} from "@ngrx/store";
import {Component, Input, ViewEncapsulation, OnInit} from "@angular/core";

import {faBars} from '@fortawesome/free-solid-svg-icons';
import {requestUserLogin} from "../../shared/stateManager/actions/user.actions";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AlertService} from "../../shared/services/alertService";
import {AppState, getLoggedUser} from "../../shared/stateManager/reducers";
import {User} from "../../shared/models/User";
import {Observable} from "rxjs";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    '../../../node_modules/bootstrap/dist/css/bootstrap.css',
  ],
})
export class LoginComponent implements OnInit {
  faBars = faBars
  form: FormGroup;
  user: Observable<User | null>

  constructor(private store: Store<AppState>,
              private formBuilder: FormBuilder,
              private alertService: AlertService) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public logIn() {
    this.alertService.clear();

    const pass = this.form.value.password;
    this.store.dispatch(requestUserLogin({userName: this.form.value.userName, password: pass}));

    this.user = this.store.select(getLoggedUser);
    this.user.subscribe(user => {
      if (user?.sessionJWT != null)
        this.alertService.success(user!.sessionJWT)
    })

  }

}
