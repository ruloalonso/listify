import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { ListService } from '../list.service';
import { AlertService } from '../../shared/alert.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.css']
})
export class ListEditComponent implements OnInit {

  loading = false;

  listForm = new FormGroup({
    name: new FormControl('', Validators.required),
    image: new FormControl(''),
    isPublic: new FormControl('', Validators.required),
    items: new FormArray([], Validators.required)
  });

  constructor(private router: Router,
              private route: ActivatedRoute,
              private listService: ListService,
              private alertService: AlertService,
              private authService: AuthService) { }

  ngOnInit() {
  }
  onSubmit() {
    this.loading = true;
    this.listService.saveList(this.listForm.value)
      .subscribe(
        data => {
          this.router.navigate(['../../' + this.authService.username]);
        },
        error => {
          this.alertService.error(error.msg);
          this.loading = false;
        });
  }
  onCancel() {
    this.router.navigate(['../../lists'], {relativeTo: this.route});
  }
  onAddItem() {
    (<FormArray>this.listForm.get('items')).push(
      new FormGroup({
        'text': new FormControl('', Validators.required),
        'isComplete': new FormControl(false)
      })
    );
  }
  onDeleteItem(index: number) {
    (<FormArray>this.listForm.get('items')).removeAt(index);
  }
}
