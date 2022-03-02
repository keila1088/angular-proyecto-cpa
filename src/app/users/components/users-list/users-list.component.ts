import { Component, OnInit } from '@angular/core';

import { UsersApiService } from '@users/services/users-api.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  constructor(
    private usersApiService: UsersApiService
  ) {
   }

  ngOnInit(): void {
    this.usersApiService.getUsers()
      .then(users => {
        console.log( users );
      })
      .catch( error => {
        console.log(error.message);
      });
  }

}
