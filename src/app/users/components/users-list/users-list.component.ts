import { Component, OnInit } from '@angular/core';

import { UsersApiService } from '@users/services/users-api.service';
import IUser from '@users/interfaces/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: Array<IUser> = [];
  error = '';
  loading = false;

  constructor(private usersApiService: UsersApiService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.usersApiService.getUsers()
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
