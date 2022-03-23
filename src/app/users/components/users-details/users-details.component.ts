import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsersApiService } from '@users/services/users-api.service';
import IUser from '@users/interfaces/user';


@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {

  userDetail: any;
  error = '';
  loading = false;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
        this.loading = true;
    this.usersApiService.getUsersById()
      .then(users => {
        this.users = users;
      })
      .catch( error => {       
        this.error = 'hubo un error. Intente mas tarde';
      })
      .finally( () => {
        this.loading = false;
      });
  }

}
