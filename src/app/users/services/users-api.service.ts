import { Injectable } from '@angular/core';

import IUser from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  constructor() { }

  getUsers() {

    return fetch('http://localhost:3000/api/v1/users?delay=500')
      .then(res => {
        return res.json();
      })
      .then(res => {
        return res.payload.users;
      });
  }
}
