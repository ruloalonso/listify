import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { AlertService } from '../../shared/alert.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loading = false;

  signinForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute,
              private alertService: AlertService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.loading = true;
    this.authService.signinUser(this.signinForm.value.username, this.signinForm.value.password)
    .subscribe(
      data => {
        this.router.navigate(['../' + this.signinForm.value.username]);
      },
      error => {
        this.alertService.error(error.error.msg);
        this.loading = false;
      });
  }

  onCancel() {
    this.router.navigate(['../lists'], {relativeTo: this.route});
  }

}
