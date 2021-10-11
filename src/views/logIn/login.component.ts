import {Store} from "@ngrx/store";
import {Component, Input, ViewEncapsulation, OnInit} from "@angular/core";

import {faBars} from '@fortawesome/free-solid-svg-icons';
import {UserState} from "../../shared/stateManager/reducers/user.reducers";
import {requestUserLogin} from "../../shared/stateManager/actions/user.actions";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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

  constructor(private store: Store<UserState>,
              private formBuilder: FormBuilder,) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public logIn() {
    const pass = this.form.value.password;
    this.store.dispatch(requestUserLogin({username: this.form.value.username, password: pass}))
    var gago = 'asds'
  }

}
